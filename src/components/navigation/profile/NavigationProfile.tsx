import { Avatar, Button, Link, Stack } from "@mui/material";
import { FC } from "react";

const NavigationProfile: FC<{}> = () => {
  return (
    <Stack
      gap="8px"
      alignItems="center"
      justifyContent="center"
      direction="column">
      <Avatar></Avatar>
      <Link textAlign="center" href="/movies">
        Alexander Chibizov
      </Link>
    </Stack>
  );
};

export default NavigationProfile;
