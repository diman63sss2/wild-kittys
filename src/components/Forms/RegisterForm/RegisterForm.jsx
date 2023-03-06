import React, {useState} from 'react';
import cl from "../DepositForm/DepositForm.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import ButtonForm from "../../UI/ButtonForm/ButtonForm";

const RegisterForm = ({setRegisterVisible}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const Validation = (e) => {
        e.preventDefault()
        console.log('Validation')

        if(login && password){
            setLogin('');
            setPassword('');
            setRegisterVisible(false)
        }
    }

    return (
        <form>
            <div className={cl.header}>
                <span className={cl.title}>Регистрация</span>
            </div>
            <div className={cl.body}>
                <InputForm onChange={(e)=>setLogin(e.target.value)} type='login' value={login} id={'login'} title='Login'/>
                <InputForm onChange={(e)=>setPassword(e.target.value)} type='password' value={password} id={'password'} title='Password'/>
                <ButtonForm onClick={(e)=>Validation(e)}>
                    Register
                </ButtonForm>
            </div>
        </form>
    );
};

export default RegisterForm;