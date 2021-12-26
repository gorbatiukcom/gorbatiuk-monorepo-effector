import { spacing } from "./spacing"

const container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

export const sizes = {
  ...spacing,
  max: "max-content",
  min: "min-content",
  full: "100%",
  container,

  contentWidth: "960px",
  contentBlogWidth: "660px",
  landingWidth: "1060px",
};

/**
 * @deprecated
 * You can derive the Sizes type from the DefaultChakraTheme
 *
 * type Sizes = DefaultChakraTheme['sizes']
 */
export type Sizes = typeof spacing &
  typeof sizes
