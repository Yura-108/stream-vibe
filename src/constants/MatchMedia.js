import pxToRem from "@/utils/pxToRem.js";

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`)
};

export default MatchMedia;