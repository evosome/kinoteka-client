import { ChatBubble } from "@mui/icons-material";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import Feedback from "./Feedback";
import { useGetFeedbackPaging } from "@app/hooks/api";
import { User } from "@app/types/user";

const CommunityFeedback: FC<{ movieId: number, user?: User }> = ({ movieId, user }) => {
  const { isLoading, feedbacks } = useGetFeedbackPaging({ movieId });

  if (isLoading) {
    return <CircularProgress />;
  }

  console.log(feedbacks, user)

  return (
    <Stack>
      <Stack gap={1} direction="row" alignItems="center">
        <ChatBubble />
        <Typography>Комментарии</Typography>
      </Stack>
      <Stack direction="column">
        {feedbacks?.map(({ id, data }) => (
          <React.Fragment key={id}>
            {data.map((feedback) => (
              <Feedback feedback={feedback} isYou={feedback.user.id === user?.id}/>
            ))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default CommunityFeedback;
