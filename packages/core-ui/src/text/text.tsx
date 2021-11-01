// import get from "lodash/get";
import React from "react";
import styled from "styled-components/native";

import { TextProps, TextStyleCompose } from "./text.types";

const NativeText = styled.Text<TextProps>`
  font-style: normal;
  ${TextStyleCompose}
`;

export const Text = (props: any) => {
  const { children } = props;
  if (children === null || children === undefined || children === "null")
    return null;
  return <NativeText {...props}>{children}</NativeText>;
};

Text.defaultProps = {
  // fontSize: "m",
  children: null,
};
