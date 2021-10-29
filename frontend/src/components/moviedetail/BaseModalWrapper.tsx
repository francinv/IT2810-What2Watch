import React from "react";
import MovieModal from "./DetailedMovieModal";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  movie: any;
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
