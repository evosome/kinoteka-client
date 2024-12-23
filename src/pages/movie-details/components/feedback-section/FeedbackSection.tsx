import { CircularProgress, Divider, Stack } from "@mui/material";
import { FC } from "react";
import UserFeedback from "./UserFeedback";
import { FeedbackSectionProps } from "./types";
import CommunityFeedback from "./CommunityFeedback";
import { useGetMe } from "@app/hooks/api/users";

const FeedbackSection: FC<FeedbackSectionProps> = ({ movie }) => {

  const { isLoading, user } = useGetMe();

  if (isLoading) {
    return <CircularProgress/>;
  }

  return (
    <Stack gap={2}>
      <UserFeedback movie={movie} user={user}/>
      <Divider flexItem orientation="horizontal"/>
      <CommunityFeedback movieId={movie.id} user={user}/>
    </Stack>
  );
};

export default FeedbackSection;
