import React, {useContext, useState} from 'react';
import cl from "./DepositForm.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import ButtonForm from "../../UI/ButtonForm/ButtonForm";
import {AuthContext} from "../../../context";


const DepositForm = () => {
    const {balance, setBalance} = useContext(AuthContext);
    const [value, setValue] = useState("");

    const onChange = ({target: {value}}) => setValue(prev => /\d+/.test(Number(value)) ? value : prev);

    const replenishBalance = (e) => {
        e.preventDefault()
        setBalance(balance + Number(value))
    }

    return (
        <form >
            <div className={cl.header}>
                <span className={cl.title}>Пополнение</span>
                <p className={cl.balance}>Баланс<span>{balance}р</span></p>
            </div>
            <div className={cl.body}>
                <InputForm onChange={onChange} type='text' value={value} id={'sum'} title='Сумма к пополнению (золотых)'/>
                <ButtonForm onClick={replenishBalance}>
                    Пополнить
                </ButtonForm>
            </div>
        </form>
    );
};

export default DepositForm;