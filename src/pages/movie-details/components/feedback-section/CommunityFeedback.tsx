import { ChatBubble } from "@mui/icons-material";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import Feedback from "./Feedback";
import { useGetFeedbackPaging } from "@app/hooks/api";
import { User } from "@app/types/user";
import { Movie } from "@app/types/movie";

const CommunityFeedback: FC<{ movie: Movie, user?: User }> = ({ movie, user }) => {
  const { isLoading, feedbacks } = useGetFeedbackPaging({ movieId: movie.id });

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
              <Feedback movie={movie} feedback={feedback} isYou={feedback.user.id === user?.id}/>
            ))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default CommunityFeedback;
