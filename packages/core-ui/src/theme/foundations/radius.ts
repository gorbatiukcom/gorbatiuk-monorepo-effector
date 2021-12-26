// const radii = [0, 4, 8, 16, 24, 32, "100%"];

export const radii = {
  none: "0",
  sm: 4,
  base: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 64,
  full: "9999px",
  gridTile0: "16px",
  gridTile1: "24px",
}

/**
 * @deprecated
 * You can derive the Radii type from the DefaultChakraTheme
 *
 * type Radii = DefaultChakraTheme['radii']
 */
export type Radii = typeof radii

export default radii
