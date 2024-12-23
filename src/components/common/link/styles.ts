import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router";

export const XLink = styled(RouterLink)<{
  needDecoration?: boolean;
  color?: string;
}>(({ theme, needDecoration, color }) => ({
  color: color ?? (needDecoration ? "" : "inherit"),
  textDecoration: "none",
}));
