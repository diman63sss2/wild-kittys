import React, {useState} from 'react';
import cl from "./LoginForm.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import ButtonForm from "../../UI/ButtonForm/ButtonForm";

const LoginForm = ({dataUser,setDataUser, setRegisterVisible, setLoginVisible}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const Validation = (e) => {
        e.preventDefault()
        console.log('Validation')
        if(login && password){
            console.log('if')
            console.log(dataUser)
            setDataUser({
                ...dataUser,
                authorize: true,
                login,

            });
        }
    }

    const RegisterOpen = () => {
        setRegisterVisible(true)
        setLoginVisible(false)
    }

    return (
        <form>
            <div className={cl.header}>
                <span className={cl.title}>Авторизация</span>
            </div>
            <div className={cl.body}>
                <InputForm onChange={(e)=>setLogin(e.target.value)} type='login' value={login} id={'login'} title='Login'/>
                <InputForm onChange={(e)=>setPassword(e.target.value)} type='password' value={password} id={'password'} title='Password'/>
                <ButtonForm onClick={(e)=>Validation(e)}>
                    Login
                </ButtonForm>
                <div onClick={()=>RegisterOpen()} className={cl.register}>Регистрация</div>
            </div>
        </form>
    );
};

export default LoginForm;