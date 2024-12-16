import { Typography } from "@mui/material";
import { FC } from "react";
import { useRouteError } from "react-router";
import { ErrorPageContainer } from "./styles";

const ErrorPage: FC<{}> = () => {
  const error = useRouteError() as Error;
  return (
    <ErrorPageContainer>
      <Typography variant="subPoster">Seems like we</Typography>
      <Typography variant="poster">Run into error...</Typography>
      <Typography>{error.message}</Typography>
    </ErrorPageContainer>
  )
}
export default ErrorPage;
