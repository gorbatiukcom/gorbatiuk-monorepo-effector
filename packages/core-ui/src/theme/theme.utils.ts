export const prepareCssVarColors = (rawColors: any) => {
  const cssVarColors: any = {};
  Object.entries(rawColors).forEach(([name, value]) => {
    cssVarColors[name] = `var(--color-${name}, ${value})`;
  });
  return cssVarColors;
};

