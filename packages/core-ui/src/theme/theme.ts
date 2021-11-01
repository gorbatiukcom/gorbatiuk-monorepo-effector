import { Platform } from "react-native";
export const isWeb = () => Platform.OS === "web";

import { buttons } from "./buttons";
import { colors, gradients } from "./colors";
import { inputs } from "./inputs";

const breakpoints = ["744px", "950px", "1200px"];
const media = {
  small: `@media screen and (max-width: ${parseInt(breakpoints[0], 10) - 1}px)`,
  medium: `@media screen and (min-width: ${breakpoints[0]})`,
  large: `@media screen and (min-width: ${breakpoints[1]})`,
  full: `@media screen and (min-width: ${breakpoints[2]})`,
  iphoneGestures: (css: string) =>
    `@media only screen and (min-device-height: 812px) { @supports (-webkit-touch-callout: none) {${css}}}`,
};

const borders = [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"];

const space = [
  0, // 0
  4, // 1
  8, // 2
  12, // 3
  16, // 4
  20, // 5
  24, // 6
  28, // 7
  32, // 8
  36, // 9
  40, // 10
  44, // 11
  48, // 12
  64, // 13
  128, // 14
  256, // 15
  512, // 16
];
const radii = [0, 4, 8, 16, 24, 32, "100%"];
const widths = space;
const heights = space;
const sizes = {
  contentWidth: "960px",
  contentBlogWidth: "660px",
  landingWidth: "1060px",
};
const maxWidths = sizes;

const fontSizes = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 24,
  h0: 64,
  h1: 48,
  h2: 32,
  h3: 28,
  h4: 24,
  h5: 20,
  u: 11,
  u1: 16,
  u2: 12,
};

const defaultWebFont =
  "Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji";

const webFonts = {
  defaultWeb: defaultWebFont,
  default: defaultWebFont,
  neris: defaultWebFont,
  openSans: defaultWebFont,
  h0: defaultWebFont,
  h1: defaultWebFont,
  h2: defaultWebFont,
  h3: defaultWebFont,
  h4: defaultWebFont,
  h5: defaultWebFont,
  u: defaultWebFont,
  u1: defaultWebFont,
  u2: defaultWebFont,
};
const webFontsByWeight = {
  300: defaultWebFont,
  400: defaultWebFont,
  600: defaultWebFont,
  700: defaultWebFont,
  900: defaultWebFont,
};
const defaultNativeFont = "SourceSansPro_400Regular";
const nativeFonts = {
  defaultWeb: defaultNativeFont,
  default: defaultNativeFont,
  neris: defaultNativeFont,
  openSans: defaultNativeFont,
  h0: "SourceSansPro_900Black",
  h1: "SourceSansPro_900Black",
  h2: "SourceSansPro_700Bold",
  h3: "SourceSansPro_700Bold",
  h4: "SourceSansPro_700Bold",
  h5: "SourceSansPro_700Bold",
  u: "SourceSansPro_400Regular",
  u1: "SourceSansPro_600SemiBold",
  u2: "SourceSansPro_600SemiBold",
};
const nativeFontsByWeight = {
  300: "SourceSansPro_300Light",
  400: "SourceSansPro_400Regular",
  600: "SourceSansPro_600SemiBold",
  700: "SourceSansPro_700Bold",
  900: "SourceSansPro_900Black",
};

const fontWeights = {
  h0: 900,
  h1: 900,
  h2: 700,
  h3: 700,
  h4: 700,
  h5: 700,
  u: 400,
  u1: 600,
  u2: 600,
};

const webLineHeights = {
  default: "170%",
  xs: "170%",
  s: "170%",
  m: "170%",
  l: "170%",
  xl: "170%",
  xxl: "170%",
  h0: "86px",
  h1: "64px",
  h2: "43px",
  h3: "38px",
  h4: "32px",
  h5: "27px",
  u: "15px",
  u1: "21px",
  u2: "17px",
};

const natibeLineHeights = {
  default: 50,
  xs: 50,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 24,
  h0: "86px",
  h1: "64px",
  h2: "43px",
  h3: "38px",
  h4: "32px",
  h5: "27px",
  u: "15px",
  u1: "21px",
  u2: "17px",
};

const letterSpacings = {
  h0: "normal",
  h1: "normal",
  h2: "normal",
  h3: "normal",
  h4: "normal",
  h5: "normal",
  u: "1px",
  u1: "1px",
  u2: "1px",
};

const textTransforms = {
  h0: "none",
  h1: "none",
  h2: "none",
  h3: "none",
  h4: "none",
  h5: "none",
  u: "uppercase",
  u1: "uppercase",
  u2: "uppercase",
};

const shadows = {
  black0: "0px 2px 50px rgba(0, 0, 0, 0.06)",
  green0: "0px 2px 6px rgb(0 153 153 / 0.25)",
  inputShadow: `0px 2px 16px 0px ${colors.gray50}`,
  swiperHeaderShadow: `0px 2px 16px 0px ${colors.black}`,
};

export const theme = {
  // StyledTheme BaseTheme
  breakpoints,
  media,
  fonts: isWeb() ? webFonts : nativeFonts,
  fontsByWeight: isWeb() ? webFontsByWeight : nativeFontsByWeight,
  lineHeights: isWeb() ? webLineHeights : natibeLineHeights,
  colors,

  fontSizes,
  space,

  // StyledTheme Extras
  borders,
  fontWeights,
  heights,
  letterSpacings,
  textTransforms,
  maxWidths,
  radii,
  shadows,
  sizes,

  buttons,
  inputs,

  // Unused
  // borderStyles: {},
  // borderWidths: [],
  // buttons: {},
  // colorStyles: {},
  // maxHeights: [],
  // minHeights: [],
  // minWidths: [],
  // opacity: [],
  // textStyles: {},
  // zIndeces: [],

  // Custom
  widths,
  gradients,
};
