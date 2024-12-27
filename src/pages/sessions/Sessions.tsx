//@ts-nocheck
import { FC } from "react";
import { SessionsPageContainer } from "./styles";
import { Button, CircularProgress, Stack } from "@mui/material";
import SessionGroup from "./SessionGroup";
import { useGetSessions } from "@app/hooks/api/sessions";

const SessionsPage: FC<{}> = () => {
    const { grouppedSessions, isLoading } = useGetSessions();

    if (isLoading) {
        <SessionsPageContainer gap={2}>
            <CircularProgress/>
        </SessionsPageContainer>
    }

    return (
        <SessionsPageContainer gap={2}>
            <Stack direction="row">
                <Button>
                    Apply filter
                </Button>
            </Stack>
            <Stack>
                { grouppedSessions?.map((sessionGroup) => <SessionGroup sessionGroup={sessionGroup}/>) }
            </Stack>
        </SessionsPageContainer>
    );
}

export default SessionsPage;
