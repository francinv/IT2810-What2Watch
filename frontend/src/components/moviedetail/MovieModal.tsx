import React from "react";
import './index.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

interface ModalProps {
    movie: any;
    onCloseClick: () => void;
}

const MovieModal: React.FC<ModalProps> = ({children, movie, onCloseClick}) => {
    let closeButton = document.body.querySelector(".closemenu");
    closeButton?.addEventListener("click", setClass);

    function setClass(this: HTMLElement, ev: Event){
        ev.preventDefault();
        let modalcont = document.querySelector(".modal-container");
        let prosidebar = document.querySelector(".pro-sidebar");
       
        if (!prosidebar?.classList.contains('collapsed')){
            modalcont?.classList.add('extra-width');
        }   
        else if ( prosidebar?.classList.contains('collapsed')){
            modalcont?.classList.remove('extra-width');
        }
        
    }

    return (
        <div className="modal-container">
            <img src="https://m.media-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg" alt="Movie Poster"/>
            <div className="content-modal-container">
                <div className="content-header">
                    <h1>{movie?.title}</h1>
                    <IconButton aria-label="close" onClick={onCloseClick} className="close-modal-btn">
                        <CloseIcon sx={{color:'white'}}/>
                    </IconButton>
                     
                </div>
                <div className="content-flex">
                    <div className="col-flex left-flex">
                        <p>Her vil beskrivelse for filmen komme, men foreløpig kun eksempel tekst. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus ac diam blandit, eleifend risus eget, suscipit eros. 
                            Etiam porta vulputate egestas. Phasellus mauris arcu, imperdiet ut sem et, 
                            pellentesque sodales elit.</p>
                    </div>
                    <div className="col-flex right-flex">
                        <h3>About the movie </h3>
                        <p><b>Release date:</b> {movie?.release_date}</p>
                        <br></br>
                        <p><b>Genres:</b> {movie?.genres}</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MovieModal;