import { Button, List, Stack, Tab, Tabs, Typography } from "@mui/material";
import { FC } from "react";
import { TextImage } from "./styles";
import { Link } from "@app/components/common/link";
import { Bookmark } from "@mui/icons-material";

const PageInfo: FC<{}> = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h5">Справочник</Typography>
      <Stack>
        <Typography variant="h6">Оглавление</Typography>
        <List>
          <Link forwardTo="/info" withHash="#main-page" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Главная страница
            </Stack>
          </Link>
          <Link forwardTo="/info" withHash="#auth" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Вход в личный кабинет
            </Stack>
          </Link>
        </List>
      </Stack>
      <Stack component="div" id="main-page">
        <Typography variant="h6">Главная страница</Typography>
        <Stack gap={2} direction="row">
          <TextImage src="http://77.246.158.84:9000/images/main.png" />
          <Typography>
            Главная страница платформы доступна, как гостям, так и
            авторизованным пользователям. Здесь пользователь может
            авторизоваться, если требуется, а также перейти по наиболее важным
            вкладкам "Фильмы" и "Сеансы".
          </Typography>
        </Stack>
      </Stack>
      <Stack component="div" id="auth">
        <Typography variant="h6">Вход в личный кабинет</Typography>
        <Stack gap={2}>
          <Stack>
            <Typography>
              Пользователь может войти в свой аккаунт или создать новый при
              нажатии на кнопку "войти" в панели навигации. При
              нажатии на кнопку перед пользователем откроется модальное окно с
              двумя вкладками "Регистрация" и "Войти"
              Во вкладке регистрации пользователю потребуется ввести свое имя,
              фамилию, логин и пароль. Во вкладке входа пользователю потребуется
              ввести только логин пароль для входа.
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/register.png" />
            <TextImage src="http://77.246.158.84:9000/images/authed.png" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PageInfo;
