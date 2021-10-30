import React from "react";
import MovieModal from "./DetailedMovieModal";
import { searchMovies_getMoviesBySearch } from "../../services/__generated__/searchMovies"

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  movie: searchMovies_getMoviesBySearch;
  onCloseClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  isModalVisible,
  movie,
  onCloseClick,
}) => {
  if (!isModalVisible) {
    return null;
  }
  return <MovieModal movie={movie} onCloseClick={onCloseClick} />;
};

export default BaseModalWrapper;
