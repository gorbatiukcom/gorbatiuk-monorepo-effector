import { breakpoints } from "./breakpoints";

export const media = {
  small: `@media screen and (max-width: ${parseInt(breakpoints[0], 10) - 1}px)`,
  medium: `@media screen and (min-width: ${breakpoints[0]})`,
  large: `@media screen and (min-width: ${breakpoints[1]})`,
  full: `@media screen and (min-width: ${breakpoints[2]})`,
  iphoneGestures: (css: string) =>
    `@media only screen and (min-device-height: 812px) { @supports (-webkit-touch-callout: none) {${css}}}`,
};
