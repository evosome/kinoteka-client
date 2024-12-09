
import { styled } from "@mui/material";

export const MovieCoverAgeRestrictionChip = styled('div')(({ theme }) => ({
    margin: '8px',
    padding: '2px',
    position: 'absolute',
    backgroundColor: `#fff`,
    borderRadius: '8px'
}));

export const MovieCoverImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
}));

export const MovieCoverContainer = styled('div')(({ theme }) => ({
    width: '16vw',
    height: '24vw',
    cursor: 'pointer',
    position: 'relative'
}));
