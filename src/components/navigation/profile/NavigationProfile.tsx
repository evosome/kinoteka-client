import {
  Avatar,
  Button,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { NavigationProfileProps } from "./types";
import { useGetMe } from "@app/hooks/api/users";
import LoginButton from "./LoginButton";
import Link from "@app/components/common/link/Link";

const NavigationProfile: FC<NavigationProfileProps> = () => {
  const { isLoading, user } = useGetMe();

  if (isLoading) {
    <CircularProgress />;
  }

  console.log(user);

  return (
    <Stack
      gap="8px"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {user ? (
        <>
          <Link color="#fff" forwardTo="/user">
            <Stack alignItems="center">
              <Avatar src={user?.details.avatarUrl} />
              <Typography>{user?.name} {user?.surname}</Typography>
            </Stack>
          </Link>
        </>
      ) : (
        <LoginButton />
      )}
    </Stack>
  );
};

export default NavigationProfile;
