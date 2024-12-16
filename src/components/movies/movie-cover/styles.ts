import { styled } from "@mui/material";

export const MovieCoverAgeRestrictionChip = styled("div")(({ theme }) => ({
  margin: "8px",
  padding: "2px",
  position: "absolute",
  backgroundColor: `#fff`,
  borderRadius: "8px",
}));

export const MovieCoverImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
}));

export const MovieCoverContainer = styled("div")<{
    withAnimation?: boolean;
}>(({ theme, withAnimation }) => ({
  "&:hover": {
    transform: (withAnimation) ? "scale(1.1)" : "",
  },
  [theme.breakpoints.down("lg")]: {
    width: "196px",
    height: "300px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "300px",
    height: "450px",
  },
  position: "relative",
  transition: `width, height 0.1s ease-in-out, transform 0.2s`,
}));
