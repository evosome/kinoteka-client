import {
  Button,
  CardContent,
  CardMedia,
  ContainerProps,
  Modal,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CenteredCard, TabPanelContainer } from "./styles";
import { useLogin, useRegister } from "@app/hooks/api/users";

interface PanelProps {
  index: number;
  selectedIndex: number;
}

const TabPanel: FC<PanelProps & ContainerProps> = (props) => {
  const { index, selectedIndex, children } = props;
  return (
    <>
      {index === selectedIndex && (
        <TabPanelContainer>{children}</TabPanelContainer>
      )}
    </>
  );
};

const LoginButton: FC<{}> = () => {
  const [open, setOpen] = useState(false);

  const [tab, setTab] = useState(0);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { status: registerStatus, doRegister } = useRegister();
  const { status, isError, doLogin } = useLogin();

  useEffect(() => {
    if (status || registerStatus) {
      window.location.reload();
    }
  }, [status, registerStatus, open]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Войти</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CenteredCard>
          <CardMedia
            sx={{ height: "128px" }}
            image="http://77.246.158.84:9000/static-image/modal-background.jpg"
          />
          <CardContent sx={{ height: "100%" }}>
            <Stack height="100%" gap={2}>
              <Typography variant="h6">Авторизация</Typography>
              <Tabs value={tab} onChange={(event, value) => setTab(value)}>
                <Tab label="Регистрация" />
                <Tab label="Войти" />
              </Tabs>
              <TabPanel index={tab} selectedIndex={0}>
                <Typography>Регистрация</Typography>
                <Stack gap={2} direction="row">
                  <TextField
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    label="Имя"
                    variant="outlined"
                  />
                  <TextField
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    label="Фамилия"
                    variant="outlined"
                  />
                </Stack>
                <TextField
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  label="Логин"
                  variant="outlined"
                />
                <TextField
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  label="Пароль"
                  variant="outlined"
                />
                <Stack>
                  <Button
                    onClick={() =>
                      doRegister({ username, password, name, surname })
                    }
                  >
                    Регистрация
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel index={tab} selectedIndex={1}>
                <Typography>Вход</Typography>
                <TextField
                  error={isError}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  label="Логин"
                  variant="outlined"
                />
                <TextField
                  error={isError}
                  value={password}
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  label="Пароль"
                  helperText={isError ? "Неверный логин или пароль" : ""}
                  variant="outlined"
                />
                <Stack>
                  <Button onClick={() => doLogin({ username, password })}>
                    Войти
                  </Button>
                </Stack>
              </TabPanel>
            </Stack>
          </CardContent>
        </CenteredCard>
      </Modal>
    </>
  );
};

export default LoginButton;
