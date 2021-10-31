import React from "react";
import { Text as TextRN } from "react-native";

export const Text = ({ children, ...rest }: any) => (
  <TextRN {...rest} style={{ color: "red" }}>
    {children}
  </TextRN>
);
