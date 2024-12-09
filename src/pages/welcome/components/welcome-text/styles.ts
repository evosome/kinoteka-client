
import { Stack, styled } from "@mui/material";
import { Gradient } from "@assets/textures";

export const WelcomeContainer = styled(Stack)(({ theme }) => ({
    padding: '2vw',
    border: 'solid 1px rgba(134, 129, 136, 0.5);',
    borderRadius: 8,
    gap: theme.spacing(8),
    flexDirection: "row",
    backgroundImage: `url(${Gradient})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
}));

export const WelcomeImage = styled('img', {
    name: 'WelcomeImage',
    slot: 'root'
})(({ theme }) => ({
    width: '24vw',
    borderRadius: '8px',
    boxShadow: '0px 6px 10px 0px rgba(0, 0, 0, 0.32);',
}));
