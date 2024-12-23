
import { FC, SyntheticEvent, useState } from "react";
import { Box, ContainerProps, Tab, Tabs } from "@mui/material";
import { MoviesPageContainer } from "./styles";
import MovieList from "./components/movie-list/MovieList";

interface MoviePanelProps {
  index: number;
  selectedIndex: number;
}

const MoviePanel: FC<MoviePanelProps & ContainerProps> = (props) => {
  const { index, selectedIndex, children } = props;
  return (
    <Box>
      { (index === selectedIndex) && children }
    </Box>
  );
}

const MoviesPage: FC<{}> = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChanged = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }

  return (
    <MoviesPageContainer>
      <Tabs value={selectedTab} onChange={handleChanged}>
        <Tab label="Movies today"/>
        <Tab label="Soon"/>
      </Tabs>
      <MoviePanel index={0} selectedIndex={selectedTab}>
        <MovieList showReleased/>
      </MoviePanel>
      <MoviePanel index={1} selectedIndex={selectedTab}>
        <MovieList/>
      </MoviePanel>
    </MoviesPageContainer>
  );
}

export default MoviesPage;
