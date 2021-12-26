import { borders } from "./borders"
import { breakpoints } from "./breakpoints"
import { colors, gradients } from "./colors"
import { radii } from "./radius"
import shadows from "./shadows"
import transition from "./transition"
import { typography } from "./typography"
import { blur } from "./blur"
import { spacing } from "./spacing"
import { sizes } from "./sizes"

export const foundations = {
  breakpoints,
  radii,
  blur,
  colors,
  ...typography,
  sizes,
  maxWidths: sizes,
  shadows,
  space: spacing,
  widths: spacing,
  heights: spacing,
  borders,
  transition,
  gradients,
}

type FoundationsType = typeof foundations

/**
 * @deprecated
 * You can derive the Foundations type from the DefaultChakraTheme
 *
 * type Foundations = Pick<
 *   DefaultChakraTheme,
 *   | "breakpoints"
 *   | "zIndices"
 *   | "radii"
 *   | "colors"
 *   | "letterSpacings"
 *   | "lineHeights"
 *   | "fontWeights"
 *   | "fonts"
 *   | "fontSizes"
 *   | "sizes"
 *   | "shadows"
 *   | "space"
 *   | "borders"
 *   | "transition"
 *  >
 */
export interface Foundations extends FoundationsType { }
