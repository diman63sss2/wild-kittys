import React, {useContext, useState} from 'react';
import cl from "../DepositForm/DepositForm.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import ButtonForm from "../../UI/ButtonForm/ButtonForm";
import {registration} from "../../../http/userAPI";
import {AuthContext} from "../../../context";
import {observer} from "mobx-react-lite";

const RegisterForm = observer(({setRegisterVisible}) => {
    const {user} = useContext(AuthContext);
    const [dataForm, setDataForm] = useState({
        login: '',
        email: '',
        password: ''
    })

    const Validation = async (e) => {
        e.preventDefault()
        console.log('Validation')
        if(dataForm.login && dataForm.password){
            try {
                const data = await registration(dataForm.email, dataForm.login, dataForm.password);
                user.setUser(data)
                user.setIsAuth(true)
                alert('Вы успешно зарегестрировались');
                setRegisterVisible(false)
            }catch (e){
                alert(e.response.data.message)
            }
        }
    }

    return (
        <form>
            <div className={cl.header}>
                <span className={cl.title}>Регистрация</span>
            </div>
            <div className={cl.body}>
                <InputForm onChange={(e)=>setDataForm({...dataForm, email: e.target.value})} type='email' value={dataForm.email} id={'emailRegister'} title='Email'/>
                <InputForm onChange={(e)=>setDataForm({...dataForm, login: e.target.value})} type='login' value={dataForm.login} id={'loginRegister'} title='Login'/>
                <InputForm onChange={(e)=>setDataForm({...dataForm, password: e.target.value})} type='password' value={dataForm.password} id={'passwordRegister'} title='Password' autoComplete={'on'}/>
                <ButtonForm onClick={(e)=>Validation(e)}>
                    Register
                </ButtonForm>
            </div>
        </form>
    );
});

export default RegisterForm;