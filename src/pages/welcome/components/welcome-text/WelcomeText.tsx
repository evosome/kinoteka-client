import { FC } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";

import { WelcomeContainer, WelcomeImage } from "./styles";
import { Glasses3DOutlined } from "@assets/icons";
import { Link } from "@app/components/common/link";
import { useGetMe } from "@app/hooks/api/users";

const WelcomeText: FC<{}> = () => {
  const { user } = useGetMe();

  return (
    <WelcomeContainer>
      <Stack justifyContent="center">
        <WelcomeImage src="https://adm-tavda.ru/userfiles/movies-summer-iStock_000017330692_XXXLarge.jpg" />
      </Stack>
      <Stack justifyContent="center" gap={4}>
        <Stack>
          <Typography variant="subPoster">
            {user ? user.name : "Уважаемый гость"},
          </Typography>
          <Typography variant="subPoster">Добро пожаловать в</Typography>
          <Stack gap={2} direction="row" alignItems="center">
            <Typography variant="poster">Platform Kinoteka</Typography>
            <Glasses3DOutlined width="8vw" />
          </Stack>
        </Stack>
        <Stack gap={2} direction="row">
          <Link forwardTo="/movies">
            <Button>Фильмы</Button>
          </Link>
          <Link forwardTo="/sessions">
            <Button>Сеансы</Button>
          </Link>
        </Stack>
      </Stack>
    </WelcomeContainer>
  );
};

export default WelcomeText;
