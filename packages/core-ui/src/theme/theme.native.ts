import { foundations } from "./foundations";
import { components } from "./components"
import { other } from "./other";
import { colors, darkThemeColors } from "./foundations/colors";

const basicTheme = {
  ...foundations,
  components,
  ...other,
};


const lightTheme = {
  ...basicTheme,
  colors,
};

const darkTheme = {
  ...basicTheme,
  colors: darkThemeColors,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
