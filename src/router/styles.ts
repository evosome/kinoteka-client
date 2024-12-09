import { styled } from "@mui/material";

export const OutletContainer = styled('div')(({ theme }) => ({
    paddingTop: `calc(${theme.paddings.pageContentTopPadding} + ${theme.sizes.headerDefaultSize})`,
    paddingLeft: '64px',
    paddingRight: '64px',
    height: `calc(100% - ${theme.sizes.headerDefaultSize} - ${theme.paddings.pageContentTopPadding})`
}));
