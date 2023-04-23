import React from 'react';
import ProfilePaymentsItem from "./ProfilePaymentsItem/ProfilePaymentsItem";

const ProfilePayments = ({props}) => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Выплаты по заказам</h2>
            {
                props.map((item, index)=>
                    <ProfilePaymentsItem props={item} id={index+1}/>
                )
            }
        </div>
    );
};

export default ProfilePayments;