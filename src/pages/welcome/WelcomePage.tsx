import { FC } from "react";
import { WelcomePageContainer } from "./styles";
import { Stack } from "@mui/material";
import { WelcomeText } from "./components/welcome-text";

const WelcomePage: FC<{}> = () => {
  return (
    <WelcomePageContainer>
        <Stack gap='8px'>
            <WelcomeText/>
        </Stack>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
