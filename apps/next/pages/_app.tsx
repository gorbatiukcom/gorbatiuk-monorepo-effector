import React from "react";
import { theme } from "@my-app/core-ui";
import { ThemeProvider } from "styled-components";

function App(props: any) {
  const { Component, pageProps, route } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} key={route} route={route} />
      </ThemeProvider>
    </>
  );
}

export default App;
