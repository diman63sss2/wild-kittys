import React from 'react';
import ProfileAuctionItem from "./ProfileAuctionItem/ProfileAuctionItem";
const ProfileActiveAuction = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Действующие аукционы</h2>
            <ProfileAuctionItem/>
            <ProfileAuctionItem/>
            <ProfileAuctionItem/>
            <ProfileAuctionItem/>
        </div>
    );
};

export default ProfileActiveAuction;