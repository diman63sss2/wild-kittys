import React from 'react';
import cl from "./ModalBase.module.css";
import InputForm from "../InputForm/InputForm";
import ButtonModal from "../ButtonForm/ButtonForm";

const ModalBase = ({children, visible, setVisible}) => {
    let balance = 993;

    const rootClasses = [cl.modalWrapper]

    if (!visible) {
        rootClasses.push(cl.close);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={cl.modal}>
                <div onClick={() => setVisible(false)} className={cl.closer}></div>
                {children}
            </div>
        </div>
    );
};

export default ModalBase;