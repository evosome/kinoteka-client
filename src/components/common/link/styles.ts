
import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router";

export const XLink = styled(RouterLink)<{ needDecoration?: boolean }>(({ theme, needDecoration }) => ({
    color: (needDecoration) ? '': 'inherit',
    textDecoration: 'none'
}));
