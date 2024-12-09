
import { styled } from "@mui/material";

export const MovieAgeRestrictionChip = styled('div')(({ theme }) => ({
    margin: '8px',
    padding: '2px',
    position: 'absolute',
    backgroundColor: `#fff`,
    borderRadius: '8px'
}));

export const MovieImageCover = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
}));

export const MovieItemContainer = styled('div')(({ theme }) => ({
    width: '16vw',
    height: '24vw',
    cursor: 'pointer',
    position: 'relative'
}));

export const MovieListContainer = styled('div')(({ theme }) => ({
    paddingTop: '32px',
    display: 'flex',
    justifyContent: 'center'
}));
