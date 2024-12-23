//@ts-nocheck

import { API_ROUTES } from "@app/routes";
import { useLoadMore } from "./reactQuery";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { useMemo, useState } from "react";
import { Movie, MovieFeedback } from "@app/types/movie";
import { UserDto } from "./users";
import { api } from "./axios";

interface FeedbackDto {
  mark: number;
  feedbackId: number;
  feedbackText: string;
  movieUserFk: UserDto;
}

const MAPPER = createMapper({
  strategyInitializer: pojos(),
});

createMap<FeedbackDto, MovieFeedback>(
  MAPPER,
  "FeedbackDto",
  "MovieFeedback",
  forMember(
    (destination) => destination.text,
    mapFrom((source) => source.feedbackText)
  ),
  forMember(
    (dest) => dest.id,
    mapFrom((source) => source.feedbackId)
  ),
  forMember(
    (dest) => dest.mark,
    mapFrom((source) => source.mark)
  ),
  forMember(
    (dest) => dest.user,
    mapFrom((source) => ({
      id: source.movieUserFk.userId,
      name: source.movieUserFk.name,
      surname: source.movieUserFk.surName,
      details: {
        login: source.movieUserFk.username,
        telephoneNumber: source.movieUserFk.telephoneNumber,
        avatarUrl: source.movieUserFk.userImage,
      },
    }))
  )
);

export const useGetFeedbackPaging = ({ movieId }: { movieId: number }) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useLoadMore<
    FeedbackDto[]
  >(`${API_ROUTES.movies}/${movieId}/feedbacks`);
  const feedbacks = useMemo(
    () =>
      !isLoading
        ? data?.pages.map((page) => ({
            id: page.number,
            data: MAPPER.mapArray<FeedbackDto, MovieFeedback>(
              page.content,
              "FeedbackDto",
              "MovieFeedback"
            ),
          }))
        : undefined,
    [data, isLoading]
  );
  return { isLoading, feedbacks };
};

export const usePostFeedback = () => {

  const [status, setStatus] = useState(false);

  return {
    status,
    doPost: ({ movieId, userId, feedbackText, mark }) => {
      api
        .post(`${API_ROUTES.feedbacks}/${userId},${movieId}`, { feedbackText, mark })
        .then(() => setStatus(true));
    }
  }
};
