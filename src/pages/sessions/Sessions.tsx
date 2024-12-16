
import { FC } from "react";
import { SessionsPageContainer } from "./styles";
import { Button, Stack } from "@mui/material";
import SessionGroup from "./SessionGroup";
import { SESSIONS } from "@app/constants";

const SessionsPage: FC<{}> = () => {
    return (
        <SessionsPageContainer gap={2}>
            <Stack direction="row">
                <Button>
                    Apply filter
                </Button>
            </Stack>
            <Stack>
                { SESSIONS.map((session) => <SessionGroup session={session}/>) }
            </Stack>
        </SessionsPageContainer>
    );
}

export default SessionsPage;
