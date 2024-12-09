
import { Stack, styled } from "@mui/material";

export const SessionsPageContainer = styled(Stack)(({ theme }) => ({
    width: '100%'
}));

export const SessionDetailsContainer = styled(Stack)(({ theme }) => ({
    padding: '8px'
}));

export const SessionItemContainer = styled(Stack)(({ theme }) => ({
    padding: '8px'
}));

export const SessionTimesListContainer = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '4px',
    border: 'solid 1px #868188',
    borderRadius: '8px'
}));

export const SessionTimeContainer = styled(Stack)(({ theme }) => ({
    width: 'min-content',
    padding: '4px',
    border: 'solid 1px #868188',
    borderRadius: '4px',
    cursor: 'pointer'
}));
