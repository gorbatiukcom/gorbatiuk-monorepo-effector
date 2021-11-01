import React from "react";
import { App as DefaultApp } from "@my-app/app";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@my-app/core-ui";
const App = (props: any) => (
  <ThemeProvider theme={theme}>
    <DefaultApp {...props} />
  </ThemeProvider>
);
export default App;
