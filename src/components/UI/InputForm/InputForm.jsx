import React from 'react';
import cl from './InputForm.module.css';

const InputForm = ({id, title, ...props}) => {
    return (
        <div className={cl.container}>
            <label htmlFor={id} className={cl.title}>{title}</label>
            <input {...props} id={id} className={cl.input}/>
        </div>

    );
};

export default InputForm;