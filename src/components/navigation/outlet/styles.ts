import { styled } from "@mui/material";

export const OutletContainer = styled('div', {
    name: 'OutletContainer',
    slot: 'root'
})(({ theme }) => ({
    paddingLeft: '16px',
    paddingRight: '16px'
}));
