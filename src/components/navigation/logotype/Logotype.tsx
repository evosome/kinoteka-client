
import { FC } from "react";

import { Stack, Typography } from "@mui/material";
import { Glasses3DColored } from "@assets/icons";
import Link from "../../../components/common/link/Link";

const KinotekaLogotype: FC<{}> = () => {
    return (
        <Stack gap="16px" direction="row" padding="8px">
            <Stack>
                <Link forwardTo="/">
                    <Typography
                        align="center"
                        variant="h1"
                        noWrap>Platform Kinoteka</Typography>
                    <Typography
                        align="center"
                        variant="subtitle1">Family cinema</Typography>
                </Link>
            </Stack>
            <Glasses3DColored width={48}/>
        </Stack>
    );
}

export default KinotekaLogotype;
