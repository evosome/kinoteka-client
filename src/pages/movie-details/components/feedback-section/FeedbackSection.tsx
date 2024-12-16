import { Divider, Stack } from "@mui/material";
import { FC } from "react";
import UserFeedback from "./UserFeedback";
import { FeedbackSectionProps } from "./types";
import CommunityFeedback from "./CommunityFeedback";

const FeedbackSection: FC<FeedbackSectionProps> = ({ user }) => {
  return (
    <Stack gap={2}>
      <UserFeedback user={user}/>
      <Divider flexItem orientation="horizontal"/>
      <CommunityFeedback/>
    </Stack>
  );
};

export default FeedbackSection;
