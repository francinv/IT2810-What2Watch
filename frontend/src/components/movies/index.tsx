import * as React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { selectMovies, selectUserIsLoggedIn, selectUserName } from "../../services/selectors";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
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
import MovieService from "../../services/index";
import { useAppDispatch } from "../../services/hooks";
import { Dispatch } from "redux";
import { setFavorite, removeFavorite } from "../loginmodal/loginslice"

interface MovieTableProps {
  onBackDropClick: () => void;
  isModalVisible: boolean;
}

const actionDispatch = (dispatch: Dispatch) => ({
  addFavorite: (id: string) =>
    dispatch(setFavorite(id)),
  removeFavoriteMovie: (id: string) =>
    dispatch(removeFavorite(id))
});

const MovieTable: React.FC<MovieTableProps> = ({
  isModalVisible,
  onBackDropClick,
}) => {
  const movies = useSelector(selectMovies);
  const isLoggedIn = useSelector(selectUserIsLoggedIn)
  const userName = useSelector(selectUserName)
  const [favorited, setFavorited] = useState("");
  const [modalMovie, setModalMovie] = useState(null!);
  const { addFavorite, removeFavoriteMovie } = actionDispatch(useAppDispatch());

  function isFavorited(movie: any): boolean {
    if (movie === null) {
      return false;
    }
    return movie.favoritedByUser.includes(userName)
  }

  const setFavorite = async (id: string) => {
    if (userName !== undefined) {
      const response = await MovieService.setMovieAsFavorite(
        userName,
        id
      ).catch((error) => {
        console.log("Error", error);
      })
      if (response) {
        addFavorite(response)
      }
    }
  }

  const removeFavorite = async (id: string) => {
    if (userName !== undefined) {
      const response = await MovieService.removeFavorite(
        userName,
        id
      ).catch((error) => {
        console.log("Error", error);
      })
      if (response) {
        removeFavoriteMovie(response)
      }
    }
  }

  function clickFavorite(movie: any) {
    if (isFavorited(movie)) {
      removeFavorite(movie.id);
    }
    else {
      setFavorite(movie.id);
    }
  }

  function setColor(movie: any){
    let iconbutton = document.querySelector(".iconBtnFavorite");
    if (isFavorited(movie)) {
      iconbutton?.classList.add('favorited');
    } else {
      iconbutton?.classList.remove('favorited');
    }
  }




  return (
    <>
      <BaseModalWrapper isModalVisible={isModalVisible} movie={modalMovie!} onCloseClick={onBackDropClick}/>
      <div className="container">
      {
        movies?.map((movie: any) => (
          
            <Card sx={{ maxWidth: 345, height:'100%'}}>
              <CardActionArea className="movie-item-card" onClick={ ()=>{
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie?.title}
                  </Typography>
                    {isLoggedIn ? (<IconButton onClick={(e) => 
                      {clickFavorite(movie)
                      setColor(movie)}
                      }> 
                        <FavoriteIcon className="iconBtnFavorite" color={isFavorited(movie) ? "error" : "inherit"}/>
                    </IconButton>) : null}
                  <Typography variant="body2" color="text.secondary">
                    Release date: {formatDateAsString(
                      convertUnixDateToDate(movie?.release_date)
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {(movie.genres.length > 1 ? "Genres: " : "Genre: ")} {movie?.genres.join(", ")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          
        ))}
      </div>
  </>  
  )
}

export default MovieTable;
