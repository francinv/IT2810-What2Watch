import * as React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { selectMovies, selectUserIsLoggedIn, selectUserName } from "../../services/selectors";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import BaseModalWrapper from "../moviedetail/BaseModalWrapper";
import {
  formatDateAsString,
  convertUnixDateToDate,
} from "../../util/dateConverter";
import Container  from 'react-bootstrap/Container';
import FavButton from "../favButton";

interface MovieTableProps {
  onBackDropClick: () => void;
  isModalVisible: boolean;
}

const MovieTable: React.FC<MovieTableProps> = ({
  isModalVisible,
  onBackDropClick,
}) => {
  const movies = useSelector(selectMovies);
  const isLoggedIn = useSelector(selectUserIsLoggedIn)
  const userName = useSelector(selectUserName)
  const [modalMovie, setModalMovie] = useState(null!);

  function isFavorited(movie: any): boolean {
    if (movie === null) {
      return false;
    }
    return movie.favoritedByUser.includes(userName)
  }

  return (
    <>
      <BaseModalWrapper isModalVisible={isModalVisible} movie={modalMovie!} onCloseClick={onBackDropClick}/>
      <Container>
      {
        movies?.map((movie: any) => (
          
            <Card sx={{ maxWidth: 345, height:'100%'}}>
              <CardActionArea className="movie-item-card" onClick={()=>{
                setModalMovie(movie);
                onBackDropClick();
              }}>
                <CardMedia
                  component="img"
                  height="auto"
                  width="auto"
                  image={movie?.poster}
                  alt="Movie poster"
                />
              </CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie?.title}
                  </Typography>
                  {isLoggedIn ? <FavButton isFavorited={isFavorited(movie)} userName={userName !== undefined ? userName : ""} id={movie.id}/> : null}
                  <Typography variant="body2" color="text.secondary">
                    {formatDateAsString(
                      convertUnixDateToDate(movie?.release_date)
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie?.genres.join(", ")}
                  </Typography>
                </CardContent>
            </Card>
          
        ))}
      </Container>
  </>  
  )
}

export default MovieTable;
