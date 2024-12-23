import { styled } from "@mui/material";

export const MovieTagContainer = styled("div")<{ customColor?: string }>(
  ({ theme, customColor }) => ({
    color: "#fff",
    padding: "4px",
    borderRadius: "8px",
    backgroundColor: customColor ?? "#000",
  })
);
