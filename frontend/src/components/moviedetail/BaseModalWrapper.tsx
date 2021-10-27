import React from "react";
import Modal from './Modal';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackDropClick: () => void;
    movie: [];
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackDropClick, isModalVisible}) => {
    if (isModalVisible){
        return null;
    }
    return(<Modal onBackDropClick={onBackDropClick}/>);
}

export default BaseModalWrapper;