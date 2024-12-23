import { Avatar, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

const EasterEgg: FC<{}> = () => {
  const [easter, setEaster] = useState(false);
  return (
    <>
      {easter ? (
        <Stack direction="row" justifyContent="center">
          <Avatar
            sx={{ width: "64px", height: "64px" }}
            src="http://77.246.158.84:9000/static-image/fox.png"
          />
        </Stack>
      ) : (
        <Typography
          component="span"
          color="#333"
          fontSize="9px"
          onClick={() => setEaster(true)}
        >
          uwu?
        </Typography>
      )}
    </>
  );
};

export default EasterEgg;
