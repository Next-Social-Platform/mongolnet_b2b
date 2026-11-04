// Сангийн package.json "exports" нь type-аа заадаггүй тул энд дахин экспортлоно.
declare module "vanilla-infinite-marquee" {
  import InfiniteMarquee from "../../node_modules/vanilla-infinite-marquee/types/infinite-marquee";
  export default InfiniteMarquee;
}
