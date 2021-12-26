const variants = {
  normal: {
    py: {
      xs: "0px",
      s: "1px",
      m: "1px",
      l: "2px",
      xl: "0px",
      xxl: "0px",
    },
    px: {
      xs: "20px",
      s: "20px",
      m: "20px",
      l: "20px",
      xl: "20px",
      xxl: "20px",
    },
  },
  withIcon: {
    py: {
      xs: "0px",
      s: "1px",
      m: "1px",
      l: "2px",
      xl: "0px",
      xxl: "0px",
    },
    px: {
      xs: "12px",
      s: "12px",
      m: "12px",
      l: "12px",
      xl: "12px",
      xxl: "12px",
    },
  },
};

const defaultProps = {
  size: "m",
  variant: "normal",
}

export const Input = {
  // parts: parts.keys,
  // baseStyle,
  // sizes,
  variants,
  defaultProps,
}
