import React from "react";
import './index.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import {
    formatDateAsString,
    convertUnixDateToDate,
  } from "../../util/dateConverter";

interface ModalProps {
    movie: any;
    onCloseClick: () => void;
}

const MovieModal: React.FC<ModalProps> = ({children, movie, onCloseClick}) => {
    let closeButton = document.body.querySelector(".closemenu");
    closeButton?.addEventListener("click", setClass);
    
    let movieclick = document.body.querySelector(".movie-item-card");
    movieclick?.addEventListener("click", setWidth);

    function setWidth(this: HTMLElement, ev: Event){
        ev.preventDefault();
        let prosidebar = document.querySelector(".pro-sidebar");
        let modalcont = document.querySelector(".modal-container");
        console.log("This is run");
        if (prosidebar?.classList.contains('collapsed')){
            modalcont?.classList.add('extra-width');
        }
    }

    function setClass(this: HTMLElement, ev: Event){
        ev.preventDefault();
        let prosidebar = document.querySelector(".pro-sidebar");
        let modalcont = document.querySelector(".modal-container");
        if (!prosidebar?.classList.contains('collapsed')){
            modalcont?.classList.add('extra-width');
        }   
        else{
            modalcont?.classList.remove('extra-width');
        }
        
    }

    return (
        <div className="modal-container">
            <img src={movie?.poster} alt="Movie Poster"/>
            <div className="content-modal-container">
                <div className="content-header">
                    <h1>{movie?.title}</h1>
                    <IconButton aria-label="close" onClick={onCloseClick} className="close-modal-btn">
                        <CloseIcon sx={{color:'white'}}/>
                    </IconButton>
                     
                </div>
                <div className="content-flex">
                    <div className="col-flex left-flex">
                        <p>{movie?.overview}</p>
                    </div>
                    <div className="col-flex right-flex">
                        <h3>About the movie </h3>
                        <p><b>Release date:</b> {formatDateAsString(
                      convertUnixDateToDate(movie?.release_date)
                    )}</p>
                        <br></br>
                        <p><b>Genres:</b> {movie?.genres.join(", ")}</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MovieModal;