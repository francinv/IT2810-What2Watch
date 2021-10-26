import React from "react";

interface ModalProps {
    onBackDropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({onBackDropClick, children}) => {
    return (
        <div onClick={onBackDropClick}>
            <span>Im a modal</span>
        </div>
    );
}

export default Modal;