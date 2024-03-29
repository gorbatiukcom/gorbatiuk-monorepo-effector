import { foundations } from "./foundations";
import { components } from "./components"
import { other } from "./other";
import { colors, darkThemeColors } from "./foundations/colors";
import { prepareCssVarColors } from "./theme.utils";

const basicTheme = {
  ...foundations,
  components,
  ...other,
};


const lightTheme = {
  ...basicTheme,
  rawColors: colors,
  colors: prepareCssVarColors(colors),
};

const darkTheme = {
  ...basicTheme,
  rawColors: darkThemeColors,
  colors: prepareCssVarColors(darkThemeColors),
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const theme = themes.light;