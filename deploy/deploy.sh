#!/usr/bin/env bash
# Pull the image from Nexus and restart the app.
# Rolls back to the previously running image if the new one is not healthy.
#
# Usage:
#   ./deploy.sh            deploy :latest (or IMAGE_TAG from .env)
#   ./deploy.sh a1b2c3d    deploy a specific tag (also a manual rollback)

set -Eeuo pipefail

SERVICE="mongolnet-b2b"
REGISTRY="repo.nextsocial.mn"
HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-120}"
LOCK_FILE="/tmp/${SERVICE}-deploy.lock"

log() { echo "[$(date '+%F %T')] $*"; }
die() { log "ERROR: $*"; exit 1; }
trap 'log "ERROR: command failed on line $LINENO"' ERR

cd "$(dirname "$(readlink -f "$0")")"

# Never run two deploys at once
exec 9>"$LOCK_FILE"
flock -n 9 || die "another deploy is already running"

if [[ $# -gt 0 ]]; then
  export IMAGE_TAG="$1"
fi

IMAGE="$(docker compose config --images "$SERVICE")"
REPO="${IMAGE%:*}"

container_id() { docker compose ps -aq "$SERVICE"; }

# Wait until the container reports healthy; fail fast if it crashes
wait_healthy() {
  local cid status health restarts
  cid="$(container_id)"
  [[ -n "$cid" ]] || return 1
  for ((i = 0; i < HEALTH_TIMEOUT; i += 2)); do
    read -r status health restarts < <(docker inspect -f \
      '{{.State.Status}} {{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}} {{.RestartCount}}' "$cid")
    case "$health" in
      healthy | none) [[ "$status" == "running" ]] && return 0 ;;
      unhealthy) return 1 ;;
    esac
    [[ "$status" == "running" && "$restarts" -eq 0 ]] || return 1
    sleep 2
  done
  return 1
}

PREV_ID=""
if cid="$(container_id)" && [[ -n "$cid" ]]; then
  PREV_ID="$(docker inspect -f '{{.Image}}' "$cid")"
fi

log "Pulling $IMAGE"
docker compose pull "$SERVICE" || die "pull failed (logged in? docker login $REGISTRY -u nsp)"
NEW_ID="$(docker image inspect -f '{{.Id}}' "$IMAGE")"

if [[ "$NEW_ID" == "$PREV_ID" ]]; then
  log "Image unchanged (${NEW_ID:7:12}), making sure it is running"
fi

log "Starting $SERVICE"
docker compose up -d --remove-orphans

log "Waiting up to ${HEALTH_TIMEOUT}s for health check"
if wait_healthy; then
  log "Deployed $IMAGE (${NEW_ID:7:12})"
  # Remove only our previous image; ignore if still tagged or in use
  if [[ -n "$PREV_ID" && "$PREV_ID" != "$NEW_ID" ]]; then
    docker image rm "$PREV_ID" >/dev/null 2>&1 || true
  fi
  docker image rm "$REPO:rollback" >/dev/null 2>&1 || true
  exit 0
fi

log "New version is not healthy, last logs:"
docker compose logs --tail 50 "$SERVICE" || true

[[ -n "$PREV_ID" && "$PREV_ID" != "$NEW_ID" ]] || die "nothing to roll back to"

log "Rolling back to previous image (${PREV_ID:7:12})"
docker tag "$PREV_ID" "$REPO:rollback"
IMAGE_TAG=rollback docker compose up -d --remove-orphans
wait_healthy || die "rollback is not healthy either, check: docker compose logs $SERVICE"
die "deploy failed, rolled back to the previous version"
