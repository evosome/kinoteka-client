import { Stack, styled } from "@mui/material";

export const UserPageContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}));

export const Ticket = styled(Stack)(({ theme }) => ({
    height: '96px',
    border: '1px solid #000',
}));
