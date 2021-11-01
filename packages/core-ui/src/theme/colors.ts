import { palette } from "./palette";

export const colors = {
  ...palette,
  red: palette.red400,
  green: palette.green400,
  yellow: palette.yellow400,
  blue: palette.blue400,
  purple: palette.purple400,

  // Core
  bgPrimary: palette.white,
  bgSecondary: palette.gray50,
  bgTertiary: palette.gray100,
  bgInversePrimary: palette.black,
  bgInverseSecondary: palette.gray800,

  contentPrimary: palette.black,
  contentSecondary: palette.gray600,
  contentTertiary: palette.gray400,
  contentInversePrimary: palette.white,
  contentInverseSecondary: palette.gray300,
  contentInverseTertiary: palette.gray400,

  // NavigationContainer theme config
  primary: palette.blue400,
  background: palette.gray50,
  card: palette.gray50,
  text: palette.black,
  border: palette.gray400,
  notification: palette.red400,

  // Dark theme
  themes: {
    dark: {
      green500: "#1c2c2c", // 10% of green

      bgPrimary: palette.gray800,
      bgSecondary: palette.gray900,
      bgTertiary: palette.black,
      bgInversePrimary: palette.white,
      bgInverseSecondary: palette.gray300,

      contentPrimary: palette.white,
      contentSecondary: palette.gray400,
      contentTertiary: palette.gray500,
      contentInversePrimary: palette.black,
      contentInverseSecondary: palette.gray900,
      contentInverseTertiary: palette.gray500,

      // NavigationContainer theme config

      primary: palette.blue400,
      background: palette.gray900,
      card: palette.gray900,
      text: palette.white,
      border: palette.gray600,
      notification: palette.red400,
    },
  },
};

export const gradients = {
  default: ["#1DE9B6", "#1DC4E9"],
  secondary: ["#E5E7E8", "#AFB2B4"],
  orange: ["#f97f63", "#e54664"],
  blue: ["#4b92ff", "#1a2980"],
  pink: ["#ff2366", "#8d4de8"],
  purple: ["#7b1fa2", "#4527a0"],
  green: ["#38ef7d", "#11998e"],
};
