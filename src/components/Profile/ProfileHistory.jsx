import React from 'react';
import ProfileHistoryItem from "./ProfileHistoryItem/ProfileHistoryItem";

const ProfileHistory = ({props}) => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>История заказов</h2>
            {
                props.map((item, index)=>
                    <ProfileHistoryItem props={item} id={index+1}/>
                )
            }



        </div>
    );
};

export default ProfileHistory;