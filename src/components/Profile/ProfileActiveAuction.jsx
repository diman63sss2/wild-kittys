import React from 'react';
import ProfileAuctionItem from "./ProfileAuctionItem/ProfileAuctionItem";
const ProfileActiveAuction = ({props,setActive,active, setContent}) => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Действующие аукционы</h2>
            {
                props.map((item)=>
                    <ProfileAuctionItem props={item} setActive={setActive} active={active} setContent={setContent}/>
            )
            }

        </div>
    );
};

export default ProfileActiveAuction;