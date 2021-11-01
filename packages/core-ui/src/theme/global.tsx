import React from "react";
import { createGlobalStyle } from "styled-components";
// import { Reset } from "styled-reset";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  
  html {
    /* height: fill-available; */
  }

  body {
    font-family: ${({ theme }) => (theme as any).fonts.default} !important;
    transition: background-color, 0.3s;
    background-color: var(--bgBody, white);
    overscroll-behavior-y: contain;
  }
  body.black {
    background-color: black;
  }
  body.overflow-hidden {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #ff6666;
  }

  b {
    font-weight: 600;
  }

  /* Class for disable padding on notification */
  .p0 {
    padding: 0px !important;
  }

  ::selection {
    color: white;
    background: #00999999;
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #009999;
    -webkit-text-fill-color: #009999;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default () => (
  <>
    {/* <Reset /> */}
    <Global />
  </>
);
