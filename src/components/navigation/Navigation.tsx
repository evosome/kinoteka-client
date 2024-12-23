import { FC } from "react";

import { Divider, Stack } from "@mui/material";
import { KinotekaLogotype } from "./logotype";
import { NavigationContainer } from "./styles";
import { NavigationButtons } from "./buttons";
import { NavigationProfile } from "./profile";

const Navigation: FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack
        height='100%'
        alignItems="center"
        gap={4}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <KinotekaLogotype/>
        <NavigationButtons/>
        <NavigationProfile/>
      </Stack>
    </NavigationContainer>
  );
};

export default Navigation;
