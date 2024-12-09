import { FC } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";

import { WelcomeContainer, WelcomeImage } from "./styles";
import { Glasses3DOutlined } from "@assets/icons";

const WelcomeText: FC<{}> = () => {
  return (
    <WelcomeContainer>
      <Stack justifyContent="center">
        <WelcomeImage src="https://adm-tavda.ru/userfiles/movies-summer-iStock_000017330692_XXXLarge.jpg" />
      </Stack>
      <Stack justifyContent="center" gap={4}>
        <Stack>
          <Typography variant="subPoster">Welcome to</Typography>
          <Stack gap={2} direction="row" alignItems="center">
            <Typography variant="poster">Platform Kinoteka</Typography>
            <Glasses3DOutlined width="8vw" />
          </Stack>
        </Stack>
        <Stack gap={2} direction="row">
          <Button href="/movies">Movies today</Button>
          <Button>Sessions</Button>
        </Stack>
      </Stack>
    </WelcomeContainer>
  );
};

export default WelcomeText;
