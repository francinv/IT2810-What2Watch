import React from 'react';

import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

interface FavButtonProps {
    movie: any;
    isFavorited: boolean;
}

const FavButton: React.FC<FavButtonProps> =({movie, isFavorited}) => {
    return(
        <>
            <button className="btn-fav" onClick={() => setFavorite()}>
                <FontAwesomeIcon icon={faHeart} color={isFavorited ? 'red' : 'lightgray'}></FontAwesomeIcon>
            </button>
        </>
    )
}

export default FavButton;

function setFavorite() {
    throw new Error('Function not implemented.');
}
