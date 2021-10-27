import React, { useEffect } from "react";
import MovieModal from './MovieModal';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    movie: any;
    onCloseClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({isModalVisible, movie, onCloseClick}) => {
    useEffect(() => {
        console.log(movie);
    }, [])

    if (!isModalVisible){
        return null;
    }
    return(<MovieModal movie={movie} onCloseClick={onCloseClick}/>);
}

export default BaseModalWrapper;