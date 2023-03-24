import {useContext, useState} from "react";
import {AuthContext} from "../context";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {user} = useContext(AuthContext);

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            console.log(e)
            setError(e.message);
        } finally {
            if(!localStorage.getItem('token')){
                user.setIsAuth(false)
                user.setUser(false)
                user.setRole(false)
            }
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}