import { MovieFeedback } from "@app/types/movie";
import { Avatar, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Feedback: FC<{ feedback: MovieFeedback; isYou?: boolean }> = ({
  feedback,
  isYou,
}) => {
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
      <Stack>
        <Typography>
          {feedback.user.name} {feedback.user.surname} {isYou ? "(Вы)" : ""}
        </Typography>
        <Rating readOnly value={feedback.mark} />
        <Typography>{feedback.text}</Typography>
      </Stack>
    </Stack>
  );
};

export default Feedback;
