import { Avatar, Link, Stack } from "@mui/material";
import { FC } from "react";
import { NavigationProfileProps } from "./types";

const NavigationProfile: FC<NavigationProfileProps> = ({ user }) => {
  const {
    name,
    surname,
    details
  } = user;
  return (
    <Stack
      gap="8px"
      alignItems="center"
      justifyContent="center"
      direction="column">
      <Avatar src={details.avatarUrl}/>
      <Link textAlign="center" href="/movies">
        {name} {surname}
      </Link>
    </Stack>
  );
};

export default NavigationProfile;
