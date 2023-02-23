import React from 'react';
import cl from './ButtonForm.module.css';

const ButtonModal = ({children,...props}) => {
    return (
        <button {...props} class={cl.btn}>
            {children}
        </button>
    );
};

export default ButtonModal;