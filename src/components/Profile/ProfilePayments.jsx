import React from 'react';
import ProfilePaymentsItem from "./ProfilePaymentsItem/ProfilePaymentsItem";

const ProfilePayments = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Активные заказы</h2>
            <ProfilePaymentsItem id={1}/>
        </div>
    );
};

export default ProfilePayments;