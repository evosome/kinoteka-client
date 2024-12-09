
import { FC } from "react";
import { Button, ButtonProps, Stack } from "@mui/material";

import { Glasses3DColored } from "@assets/icons"
import Link from "../../../components/common/link/Link";

const NavigationButton: FC<ButtonProps> = (props) => {
    return (
        <Stack
            gap={4}
            flexGrow={1}
            direction="row"
        >
            <Button>
                <Link forwardTo="/movies">Movies today</Link>
            </Button>
            <Button startIcon={<Glasses3DColored width={32}/>}>
                <Link forwardTo="/sessions">Sessions</Link>
            </Button>
            <Button>
                More
            </Button>
        </Stack>
    );
}

export default NavigationButton;
