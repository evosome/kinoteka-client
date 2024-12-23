

import { Stack, styled } from "@mui/material";

export const WelcomePageContainer = styled('div', {
    name: 'WelcomePageContainer',
    slot: 'root'
})(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const WelcomePageFooterContainer = styled(Stack)(({ theme }) => ({
    marginLeft: '-64px',
    marginRight: '-64px',
    padding: '8px',
    display: 'flex',
    minHeight: '128px',
    backgroundColor: '#000'
}));
