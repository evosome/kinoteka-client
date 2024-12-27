import { useDeleteFeedback } from "@app/hooks/api/feedbacks";
import { Movie, MovieFeedback } from "@app/types/movie";
import { Delete } from "@mui/icons-material";
import { Avatar, Button, Rating, Stack, Typography } from "@mui/material";
import { FC, useEffect } from "react";

const Feedback: FC<{
  movie: Movie;
  feedback: MovieFeedback;
  isYou?: boolean;
}> = ({ movie, feedback, isYou }) => {
  const { status, doDelete } = useDeleteFeedback();

  useEffect(() => {
    if (status) {
      window.location.reload();
    }
  }, [status]);

  return (
    <Stack
      sx={{ backgroundColor: isYou ? "#f4f4f4" : "#fff" }}
      padding={2}
      gap={2}
      direction="row"
    >
      <Stack justifyContent="center">
        <Avatar
          src={feedback.user.details.avatarUrl}
          sx={{ width: 48, height: 48 }}
        />
      </Stack>
      <Stack flexGrow={1}>
        <Typography>
          {feedback.user.name} {feedback.user.surname} {isYou ? "(Вы)" : ""}
        </Typography>
        <Rating readOnly value={feedback.mark} />
        <Typography>{feedback.text}</Typography>
      </Stack>
      <Stack>
        {isYou ? (
          <Button
            onClick={() =>
              doDelete({
                userId: feedback.user.id,
                feedbackId: feedback.id,
                movieId: movie.id,
              })
            }
          >
            <Delete />
          </Button>
        ) : undefined}
      </Stack>
    </Stack>
  );
};

export default Feedback;
