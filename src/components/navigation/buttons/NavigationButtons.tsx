import { FC } from "react";
import { Button, ButtonProps, Stack } from "@mui/material";

import { Glasses3DColored } from "@assets/icons";
import Link from "../../../components/common/link/Link";

const NavigationButton: FC<ButtonProps> = (props) => {
  return (
    <Stack gap={4} flexGrow={1} direction="row">
      <Link forwardTo="/movies">
        <Button>Фильмы</Button>
      </Link>
      <Link forwardTo="/sessions">
        <Button>Сеансы</Button>
      </Link>
      <Link forwardTo="/" withHash="#footer-section">
        <Button>О Разработчиках</Button>
      </Link>
      <Link forwardTo="/info">
        <Button>Сведения о системе</Button>
      </Link>
    </Stack>
  );
};

export default NavigationButton;
