declare module "springer" {
  type Ease = (t: number) => number;
  type SpringerFactory = (tension?: number, damping?: number) => Ease;
  const springer: SpringerFactory | { default: SpringerFactory };
  export default springer;
}
