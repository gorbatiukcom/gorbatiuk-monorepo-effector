import { media } from "./foundations/media";


const heightHeaderPhoto = `
  --hc-sm-height: 400;
  --hc-sm-width: 375;
  --hc-md-height: 588;
  --hc-md-width: 744;
  --hc-lg-height: 564;
  --hc-lg-width: 1128;
  height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw);
  ${media.medium} {
    height: calc(var(--hc-md-height, 1) / var(--hc-md-width, 1) * 100vw);
  }
  ${media.large} {
    height: max(550px, min(85vh, calc(var(--hc-lg-height, 9) / var(--hc-lg-width, 16) * 100vw)));
  }     
  `;
// eslint-disable-next-line @typescript-eslint/no-shadow

const styledScrollbar = (theme: any, secondaryVariant?: boolean) => `
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    background-color: ${theme.colors.bgTertiary};
    min-height: 40px;
  }

  ::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    background-color: ${secondaryVariant ? theme.colors.bgPrimary : theme.colors.bgSecondary};
    // margin-bottom: 8px;
  }
`;
const scrollbarHide = `
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }
`;

export const other = {
  heightHeaderPhoto,
  styledScrollbar,
  scrollbarHide,
  forms: {
    input: {
      color: "text300",
    },
  },
  filtres: {
    bgFilter: "grayscale(1) brightness(0.2)",
  },
}
