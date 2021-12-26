import { palette } from "./palette";

export type Colors = typeof colors

export const colors = {
  ...palette,
  red: palette.red[400],
  green: palette.green[400],
  yellow: palette.yellow[400],
  blue: palette.blue[400],
  purple: palette.purple[400],

  // Core
  bgPrimary: palette.white,
  bgSecondary: palette.gray[50],
  bgTertiary: palette.gray[100],
  bgInversePrimary: palette.black,
  bgInverseSecondary: palette.gray[800],

  contentPrimary: palette.black,
  contentSecondary: palette.gray[600],
  contentTertiary: palette.gray[400],
  contentInversePrimary: palette.white,
  contentInverseSecondary: palette.gray[300],
  contentInverseTertiary: palette.gray[400],

  // Tested
  buttonIconHover: "rgba(0,0,0,0.2)",
};

export const darkThemeColors = {
  ...colors,
  green500: "#1c2c2c", // 10% of green

  bgPrimary: palette.gray[800],
  bgSecondary: palette.gray[900],
  bgTertiary: palette.black,
  bgInversePrimary: palette.white,
  bgInverseSecondary: palette.gray[300],

  contentPrimary: palette.white,
  contentSecondary: palette.gray[400],
  contentTertiary: palette.gray[500],
  contentInversePrimary: palette.black,
  contentInverseSecondary: palette.gray[900],
  contentInverseTertiary: palette.gray[500],

  // Tested
  buttonIconHover: "rgba(255,255,255,0.2)",
}

export const gradients = {
  default: ["#1DE9B6", "#1DC4E9"],
  secondary: ["#E5E7E8", "#AFB2B4"],
  orange: ["#f97f63", "#e54664"],
  blue: ["#4b92ff", "#1a2980"],
  pink: ["#ff2366", "#8d4de8"],
  purple: ["#7b1fa2", "#4527a0"],
  green: ["#38ef7d", "#11998e"],
};
