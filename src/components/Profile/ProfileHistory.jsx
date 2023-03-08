import React from 'react';
import ProfileHistoryItem from "./ProfileHistoryItem/ProfileHistoryItem";

const ProfileHistory = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>История заказов</h2>
            <ProfileHistoryItem id={1}/>


        </div>
    );
};

export default ProfileHistory;