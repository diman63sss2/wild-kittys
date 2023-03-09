import React from 'react';
import ProfileMyAuctionItem from "./ProfileMyAuctionItem/ProfileMyAuctionItem";

const ProfileMyAuction = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Мои аукционы</h2>
            <ProfileMyAuctionItem/>
            <ProfileMyAuctionItem/>
            <ProfileMyAuctionItem/>
            <ProfileMyAuctionItem/>
        </div>
    );
};

export default ProfileMyAuction;