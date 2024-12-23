import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  ContainerProps,
  Divider,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { UserPageContainer } from "./styles";
import { useGetMe, useLogout } from "@app/hooks/api/users";
import { useNavigate } from "react-router";

interface MoviePanelProps {
  index: number;
  selectedIndex: number;
}

const TabPanel: FC<MoviePanelProps & ContainerProps> = (props) => {
  const { index, selectedIndex, children } = props;
  return <Box>{index === selectedIndex && children}</Box>;
};

const UserDetails: FC<{}> = () => {
  const [tab, setTab] = useState(0);
  const { status, doLogout } = useLogout();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { user, isLoading } = useGetMe();

  useEffect(() => {
    if (status) {
      navigate("/");
      window.location.reload();
    }
  }, [status]);

  useEffect(() => {
    if (!isLoading && user) {
      setName(user.name);
      setSurname(user.surname);
      setPhone(user.details.telephoneNumber);
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <UserPageContainer>
        <CircularProgress />
      </UserPageContainer>
    );
  }

  return (
    <UserPageContainer gap={4} direction="row">
      <Stack maxWidth="196px" gap={2}>
        <Avatar
          sx={{
            width: "196px",
            height: "196px",
            boxShadow: "0px 10px 11px 0px rgba(111, 111, 111, 0.2);",
          }}
          src={user?.details.avatarUrl}
        />
        <Button>Загрузить аватар</Button>
        <Typography color="#000" variant="caption">
          (Изображение в формате PNG, JPEG и GIF. Не более 1024x1024 пикселя)
        </Typography>
      </Stack>
      <Divider flexItem orientation="vertical" />
      <Stack gap={2} width="512px">
        <Stack>
          <Typography color="#000" variant="h1">
            {user?.name}
          </Typography>
          <Typography color="#000" variant="h1">
            {user?.surname}
          </Typography>
        </Stack>
        <Tabs value={tab} onChange={(event, value) => setTab(value)}>
          <Tab label="Настройки" />
          <Tab label="Билеты" />
        </Tabs>
        <TabPanel index={tab} selectedIndex={0}>
          <Stack gap={2} alignItems="end">
            <Stack gap={2} direction="row" alignItems="center">
              <Typography>Имя:</Typography>
              <TextField value={name} variant="outlined" />
            </Stack>
            <Stack gap={2} direction="row" alignItems="center">
              <Typography>Фамилия:</Typography>
              <TextField value={surname} variant="outlined" />
            </Stack>
            <Stack gap={2} direction="row" alignItems="center">
              <Typography>Номер телефона:</Typography>
              <TextField value={phone} variant="outlined" />
            </Stack>
            <Stack gap={2} direction="row" alignItems="center">
              <Typography>E-mail:</Typography>
              <TextField value={email} variant="outlined" />
            </Stack>
            <Stack gap={2} direction="row">
              <Button onClick={() => doLogout()}>Выйти из аккаунта</Button>
              <Button disabled>Сохранить настройки</Button>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel index={tab} selectedIndex={1}></TabPanel>
      </Stack>
    </UserPageContainer>
  );
};

export default UserDetails;
