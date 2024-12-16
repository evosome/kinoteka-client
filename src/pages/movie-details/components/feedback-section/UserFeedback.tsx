import {
  Avatar,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { UserFeedbackProps } from "./types";

const UserFeedback: FC<UserFeedbackProps> = ({ user }) => {
  const { name, surname } = user;
  return (
    <Stack gap={2}>
      <Stack alignItems="center">
        <Stack gap={2} direction="row">
          <Avatar sx={{ width: 96, height: 96 }} src={user.details.avatarUrl} />
          <Stack>
            <Typography>
              {name} {surname},
            </Typography>
            <Typography>rate the movie</Typography>
            <Rating />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField fullWidth label="Write your comment" variant="outlined" />
        <Button>Send</Button>
      </Stack>
    </Stack>
  );
};

export default UserFeedback;
