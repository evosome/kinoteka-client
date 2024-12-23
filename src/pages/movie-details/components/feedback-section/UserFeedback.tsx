import {
  Avatar,
  Button,
  CircularProgress,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { UserFeedbackProps } from "./types";
import { useGetMe } from "@app/hooks/api/users";
import { usePostFeedback } from "@app/hooks/api/feedbacks";

const UserFeedback: FC<UserFeedbackProps> = ({ movie, user }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const { status, doPost } = usePostFeedback();

  useEffect(
    () => {
      if (status) {
        window.location.reload();
      }
    },
    [status]
  )

  return (
    <Stack gap={2}>
      <Stack alignItems="center">
        {user ? (
          <Stack gap={2} direction="row">
            <Avatar
              sx={{ width: 96, height: 96 }}
              src={user?.details.avatarUrl}
            />
            <Stack>
              <Typography>
                {user?.name} {user?.surname},
              </Typography>
              <Typography>rate the movie</Typography>
              <Rating
                value={rating}
                onChange={(event, value) => setRating(value!)}
              />
            </Stack>
          </Stack>
        ) : (
          <Typography>Войдите, чтобы оставить отзыв</Typography>
        )}
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField
          value={text}
          onChange={(event) => setText(event.target.value)}
          disabled={!user}
          fullWidth
          label="Write your comment"
          variant="outlined"
        />
        <Button
          disabled={!user}
          onClick={() => {
            doPost({
              movieId: movie.id,
              userId: user!.id,
              feedbackText: text,
              mark: rating,
            });
          }}
        >
          Send
        </Button>
      </Stack>
    </Stack>
  );
};

export default UserFeedback;
