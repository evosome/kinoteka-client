import { createTheme } from "@mui/material";

const EvosomeKinotekaTheme = createTheme({
  sizes: {
    headerDefaultSize: "96px",
  },

  paddings: {
    pageContentTopPadding: "48px",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#000"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(132, 132, 132, 0.6)',
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: "h1",
        },
      },
      variants: [
        {
          props: { variant: "poster" },
          style: {
            color: "#212123",
            fontSize: "5vw",
            fontFamily: "Roboto",
          },
        },
        {
          props: { variant: "subPoster" },
          style: {
            color: "#352b42",
            fontSize: "3vw",
            fontFamily: "Roboto",
          },
        },
        {
          props: { variant: "h1" },
          style: {
            color: "#fff",
            fontSize: 32,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            color: "#fff",
            fontSize: 28,
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            color: "#fff",
            fontSize: 16,
          },
        },
      ],
    },
  },
});

export default EvosomeKinotekaTheme;
