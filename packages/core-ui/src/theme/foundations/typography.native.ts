export const Fonts = {
  body: undefined,
  heading: "SourceSansPro_700Bold",
  mono: undefined,
};

export const typography = {
  letterSpacings: {
    h0: "normal",
    h1: "normal",
    h2: "normal",
    h3: "normal",
    h4: "normal",
    h5: "normal",
    u: "1px",
    u1: "1px",
    u2: "1px",
    // 
    // tighter: "-0.05em",
    // tight: "-0.025em",
    normal: "0",
    // wide: "0.025em",
    // wider: "0.05em",
    // widest: "0.1em",
  },

  lineHeights: {
    // 
    normal: "normal",
    none: 1,
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
  },

  fontWeights: {
    h0: 900,
    h1: 900,
    h2: 700,
    h3: 700,
    h4: 700,
    h5: 700,
    u: 400,
    u1: 600,
    u2: 600,
    // 
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fonts: {
    ...Fonts,
    h0: "SourceSansPro_900Black",
    h1: "SourceSansPro_900Black",
    h2: "SourceSansPro_700Bold",
    h3: "SourceSansPro_700Bold",
    h4: "SourceSansPro_700Bold",
    h5: "SourceSansPro_700Bold",
    u: "SourceSansPro_400Regular",
    u1: "SourceSansPro_600SemiBold",
    u2: "SourceSansPro_600SemiBold",
  },

  fontsByWeight: {
    300: "SourceSansPro_300Light",
    400: "SourceSansPro_400Regular",
    600: "SourceSansPro_600SemiBold",
    700: "SourceSansPro_700Bold",
    900: "SourceSansPro_900Black",
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 18,
    xl: 20,
    "2xl": 24,
    h0: 64,
    h1: 48,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    u: 11,
    u1: 16,
    u2: 12,
  },

  textTransforms: {
    h0: "none",
    h1: "none",
    h2: "none",
    h3: "none",
    h4: "none",
    h5: "none",
    u: "uppercase",
    u1: "uppercase",
    u2: "uppercase",
  },
}

/**
 * @deprecated
 * You can derive the Typography type from the DefaultChakraTheme
 *
 * type Typography = Pick<
 *   DefaultChakraTheme,
 *   | "letterSpacings"
 *   | "lineHeights"
 *   | "fontWeights"
 *   | "fonts"
 *   | "fontSizes"
 *  >
 */
export type Typography = typeof typography

export default typography
