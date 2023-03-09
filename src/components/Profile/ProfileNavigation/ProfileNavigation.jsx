import React from 'react';
import cl from './ProfileNavigation.module.css';

const ProfileNavigation = ({pages, active, setActive}) => {

    const getClasses =  (active, el) => {
        console.log(el.name)
        console.log(active)
        if(el.name === active) {
            return cl.button + ' ' + cl.active;
        }
        return cl.button;
    }

    return (
        <div className={'profile__navigation'}>
            <ul className={cl.list}>
                {
                    pages.map((el) =>
                        <li key={el.name} className={cl.item}>
                            <button onClick={()=>setActive(el.name)} className={getClasses(active, el)}> {el.title}</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ProfileNavigation;