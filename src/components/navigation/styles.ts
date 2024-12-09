import { styled } from "@mui/material";

export const NavigationContainer = styled("div", {
  name: "NavigationContainer",
  slot: "root",
})(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  minWidth: '40%',
  position: "fixed",
  backgroundColor: "#000",
  height: `max(96px, ${theme.sizes.headerDefaultSize})`,
  paddingLeft: '16px',
  paddingRight: '16px',
  boxSizing: 'border-box'
}));
