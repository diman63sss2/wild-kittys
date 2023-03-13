import React from 'react';
import ProfileMyAuctionItem from "./ProfileMyAuctionItem/ProfileMyAuctionItem";

const ProfileMyAuction = ({props, setActive, active, setContent}) => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Мои аукционы</h2>
            {
                props.map((item)=>
                    <ProfileMyAuctionItem props={item} setActive={setActive} active={active} setContent={setContent}/>
                )
            }

        </div>
    );
};

export default ProfileMyAuction;