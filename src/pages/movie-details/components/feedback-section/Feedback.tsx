import { Avatar, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Feedback: FC<{}> = () => {
  return (
    <Stack padding={2} gap={2} direction="row">
      <Stack justifyContent="center">
        <Avatar src="https://sun9-14.userapi.com/impg/vQj_YhrdMvx0dic_9Xc6AZz4ZSLzFzN3pu2zrQ/bTZioPVtt_M.jpg?size=640x640&quality=96&sign=2e1cb6632900d118406d3875b7608339&type=album" sx={{ width: 48, height: 48 }}/>
      </Stack>
      <Stack>
        <Typography>Pavel Salatov</Typography>
        <Rating readOnly value={4}/>
        <Typography>мультик бомба</Typography>
      </Stack>
    </Stack>
  );
};

export default Feedback;
