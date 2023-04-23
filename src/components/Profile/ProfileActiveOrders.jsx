import React from 'react';
import ProfileActiveOrdersItem from "./ProfileActiveOrdersItem/ProfileActiveOrdersItem";

const ProfileActiveOrders = ({props}) => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Активные заказы</h2>
            {
                props.map((item, index)=>
                    <ProfileActiveOrdersItem props={item} id={index+1}/>
                )
            }



        </div>
    );
};

export default ProfileActiveOrders;