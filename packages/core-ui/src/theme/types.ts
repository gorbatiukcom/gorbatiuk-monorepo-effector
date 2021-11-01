import { colors, gradients } from "./colors";
import { theme } from "./theme";

// export type FontFamily = keyof typeof defaultTheme.fonts;
// export type FontStyle = keyof typeof defaultTheme.fonts.regular;
// export type FontWeight = keyof typeof defaultTheme.fonts.regular.normal;

export type Color = keyof typeof colors;

export enum ThemeMode {
  "light" = "light",
  "dark" = "dark",
}
export type Theme = typeof theme;

export interface ThemedProps {
  theme: Theme;
}

export type WithTheme<P> = P & ThemedProps;
