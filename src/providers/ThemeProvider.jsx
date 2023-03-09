import React, {useEffect} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import getTheme from "./getTheme";

const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = React.useState(getTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div id='theme' data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider