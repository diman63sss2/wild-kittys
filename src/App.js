import React, {useContext, useEffect} from 'react';
import './styles/Themes.css';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import ThemeProvider from "./providers/ThemeProvider";
import {useFetching} from "./hooks/useFetching";
import {observer} from "mobx-react-lite";
import {AuthContext} from "./context";
import {check} from "./http/userAPI";


const App = observer(() => {

    const {user} = useContext(AuthContext);

    const [fetchRole, isRoleLoading] = useFetching(async (token) => {
        const response = await check(token);
        if(response.status === 200){
            user.setIsAuth(true);
            user.setRole(response.data.role);
            console.log(user)
        }
        console.log('useFetching role not 200')
    })

    /* eslint-enable no-unused-vars */
    useEffect(() => {
        fetchRole(localStorage.getItem('token')).then()

    }, // eslint-disable-next-line
        [])

    if(isRoleLoading){
        return  <div>ЗАГРУЗКА.................</div>
    }

    return (
        <ThemeProvider>
            <BrowserRouter>
                    <Header/>
                    <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
});

export default App;
