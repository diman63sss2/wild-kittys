import React, {useContext, useState} from 'react';
import imgTheme from "../../img/utitlity-theme.svg";
import {ThemeContext} from "../../context/ThemeContext";


const HeaderTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [classes, setClasses] = useState(['header__tools__utility', 'header__tools__utility__themes']);

    const ModalSwitch = () => {
        if(classes.includes('active')){
            setClasses(['header__tools__utility', 'header__tools__utility__themes'])
        }else {
            setClasses([...classes, 'active'])
        }
    }

    const themes = [{
        title: 'Светлая тема',
        name: 'light'
    }, {
        title: 'Темная тема',
        name: 'dark'
    },
    {
        title: 'Аниме тема',
        name: 'anime'
    }]

    return (
        <div onClick={() => ModalSwitch()} className={classes.join(' ')}>
            <img src={imgTheme} alt="img" className="header__tools__utility__img"/>
            <ul className={'header__themes'} onClick={(e) => e.stopPropagation()}>
                {
                    themes.map((el)=>
                        <li onClick={()=>setTheme(el.name)} className={theme === el.name ? 'active' : ''} key={el.name}>
                            {el.title}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default HeaderTheme;