
import { FC } from "react";
import { SessionTimesListProps } from "./types";
import SessionTime from "./SessionTime";
import { Stack } from "@mui/material";

const SessionTimesList: FC<SessionTimesListProps> = ({ sessionTimes }) => {
    return (
        <Stack gap={1} flexWrap='wrap' direction="row">
            { sessionTimes.map((sessionTime) => <SessionTime sessionTime={sessionTime}/>) }
        </Stack>
    );
}

export default SessionTimesList;
