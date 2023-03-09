import React from 'react';

const ProfileNavigation = () => {
    return (
        <div className={'profile__navigation'}>
            <h1 className={'profile__hiading1'}> Заказы</h1>
            <ul className={'profile__list'}>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>Действующие аукционы</button>
                </li>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>Мои аукционы</button>
                </li>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>Активные</button>
                </li>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>Выплаты</button>
                </li>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>История</button>
                </li>
                <li className={'profile__list__item'}>
                    <button className={'profile__navigation__button'}>Мои товары</button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileNavigation;