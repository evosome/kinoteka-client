declare module "@mui/material/styles" {

  interface Theme {

    sizes: {
      headerDefaultSize: string
    },

    paddings: {
      pageContentTopPadding: string
    },
  }

  interface ThemeOptions {

    sizes?: {
      headerDefaultSize: string
    },

    paddings?: {
      pageContentTopPadding: string
    },
  }

  interface TypographyVariants {
    poster: React.CSSProperties;
    subPoster: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    subPoster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    subPoster: true;
  }
}

export {};
