import { ChatBubble } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import Feedback from "./Feedback";

const CommunityFeedback: FC<{}> = () => {
  return (
    <Stack>
      <Stack gap={1} direction="row" alignItems="center">
        <ChatBubble/>
        <Typography>Comments (1000)</Typography>
      </Stack>
      <Stack direction="column">
        <Feedback/>
      </Stack>
    </Stack>
  );
};

export default CommunityFeedback;
