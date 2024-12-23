import { Card, Stack, styled } from "@mui/material";

export const CenteredCard = styled(Card)(({ theme }) => ({
  width: "400px",
  height: "600px",
}));

export const TabPanelContainer = styled("div")(({ theme }) => ({
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
