import React from 'react';
import ProfileActiveOrdersItem from "./ProfileActiveOrdersItem/ProfileActiveOrdersItem";

const ProfileActiveOrders = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Выплаты по заказам</h2>
            <ProfileActiveOrdersItem id={1}/>


        </div>
    );
};

export default ProfileActiveOrders;