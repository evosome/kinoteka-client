
import { Stack, styled, Typography } from "@mui/material";

export const SessionsPageContainer = styled(Stack)(({ theme }) => ({
    width: '100%'
}));

export const SessionDetailsContainer = styled(Stack)(({ theme }) => ({
    padding: '8px'
}));

export const SessionItemContainer = styled(Stack)(({ theme }) => ({
    padding: '8px'
}));

export const SessionTimesListContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    padding: '4px',
    border: 'solid 1px #868188',
    borderRadius: '8px'
}));

export const SessionTimeContainer = styled(Stack)(({ theme }) => ({
    width: 'min-content',
    height: 'min-content',
    padding: '4px',
    border: 'solid 1px #868188',
    borderLeft: 'solid 4px #868188',
    borderRadius: '4px',
    cursor: 'pointer'
}));

export const Seat = styled(Typography)<{ seatColor: string, selected?: boolean }>(({ theme, seatColor, selected }) => ({
    padding: '2px',
    borderRadius: '4px',
    backgroundColor: seatColor,
    filter: `brightness(${ selected ? '80%' : '100%' })`,
    boxShadow: `0px 0px 8px 0px ${seatColor}`
}))
