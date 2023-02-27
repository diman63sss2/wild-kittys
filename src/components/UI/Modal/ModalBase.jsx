import React from 'react';
import cl from "./ModalBase.module.css";

const ModalBase = ({children, visible, setVisible}) => {

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