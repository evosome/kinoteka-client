import { FC, useCallback, useEffect } from "react";
import { WelcomePageContainer } from "./styles";
import { Stack, Typography } from "@mui/material";
import { WelcomeText } from "./components/welcome-text";
import { useGetCinemas } from "@app/hooks/api";

const WelcomePage: FC<{}> = () => {

  const { isLoading, cinemas } = useGetCinemas();

  return (
    <WelcomePageContainer>
        <Stack gap='8px'>
            <WelcomeText/>
        </Stack>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
