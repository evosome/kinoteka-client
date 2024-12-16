import { styled } from "@mui/material";
import { Stack } from "@mui/material";

export const MovieDetailsContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const MovieDetailsGallery = styled(Stack)(({ theme }) => ({
  width: "100%",
  justifyContent: 'center',
  "& img": {
    width: "128px",
    height: "128px",
    objectFit: 'cover',
    borderRadius: '8px'
  },
  [theme.breakpoints.up("xl")]: {
    width: '100%',
    "& img": {
      width: "256px !important",
      height: "256px !important",
    },
  },
}));
