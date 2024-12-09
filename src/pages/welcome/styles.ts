

import { styled } from "@mui/material";

export const WelcomePageContainer = styled('div', {
    name: 'WelcomePageContainer',
    slot: 'root'
})(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));
