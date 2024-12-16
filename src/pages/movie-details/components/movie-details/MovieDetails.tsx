import { MovieCover } from "../../../../components/movies/movie-cover";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { MovieDetailsProps } from "./types";
import { MovieTag } from "@app/components/movies/movie-tag";
import { MovieDetailsContainer, MovieDetailsGallery } from "./styles";

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <Stack width="100%" gap={4} direction="row">
      <Stack>
        <MovieCover movie={movie} />
      </Stack>
      <MovieDetailsContainer gap={4}>
        <Stack gap={1} minWidth="512px">
          <Stack>
            <Stack gap={1} direction="row">
              {movie.genres &&
                movie.genres.map((g) => <MovieTag label={g.name} />)}
            </Stack>
            <Typography variant="h4">
              {movie.name} ({movie.ageRestriction})
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              {movie.type}, {movie.publishYear}, {movie.publishCountry}
            </Typography>
            <Typography
              maxWidth={512}
              style={{ wordBreak: "normal" }}
              variant="caption"
            >
              {movie.description}
            </Typography>
          </Stack>
        </Stack>
        <MovieDetailsGallery>
          <Stack
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            direction="row"
          >
            {movie.galleryUrls &&
              movie.galleryUrls.map((url) => <img src={url} />)}
          </Stack>
        </MovieDetailsGallery>
      </MovieDetailsContainer>
    </Stack>
  );
};

export default MovieDetails;