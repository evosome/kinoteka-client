
import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { SessionTimeContainer } from "./styles";
import { SessionTimeProps } from "./types";

const SessionTime: FC<SessionTimeProps> = ({ sessionTime }) => {
    const {
        time,
        hall,
        price
    } = sessionTime;
    return (
        <SessionTimeContainer direction="column">
            <Typography>{ time }</Typography>
            <Typography noWrap>Hall: { hall }</Typography>
            <Typography noWrap>Price: { price } RUB</Typography>
        </SessionTimeContainer>
    );
}

export default SessionTime;
