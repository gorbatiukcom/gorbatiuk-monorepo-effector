import { TextProps as RNTextProps } from "react-native";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  typography,
  width,
} from "styled-system";
import * as StyledSystem from "styled-system";

export interface TextProps
  extends RNTextProps,
  StyledSystem.SpaceProps,
  StyledSystem.LayoutProps,
  StyledSystem.FontSizeProps,
  StyledSystem.FontWeightProps,
  StyledSystem.TextAlignProps,
  StyledSystem.LineHeightProps,
  StyledSystem.ColorProps,
  StyledSystem.FlexboxProps,
  StyledSystem.OrderProps,
  StyledSystem.AlignSelfProps,
  StyledSystem.PositionProps,
  StyledSystem.BorderProps,
  StyledSystem.ShadowProps,
  StyledSystem.BackgroundProps {
  onClick?: any;
}

export const TextStyleCompose = () =>
  compose(
    flexbox,
    typography,
    space,
    color,
    width,
    border,
    position,
    layout,
    system({
      textTransform: true,
      userSelect: true,
      lineHeights: true,
    }),
  );
