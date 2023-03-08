import React from 'react';
import PageContainer from "../components/PageContainer";
import ProfileNavigation from "../components/Profile/ProfileNavigation/ProfileNavigation";
import ProfileActiveAuction from "../components/Profile/ProfileActiveAuction";
import ProfileMyAuction from "../components/Profile/ProfileMyAuction";
import ProfileActiveOrders from "../components/Profile/ProfileActiveOrders";
import ProfilePayments from "../components/Profile/ProfilePayments";
import ProfileHistory from "../components/Profile/ProfileHistory";
import ProfileAuction from "../components/Profile/ProfileAuction";
import ProfileMyProducts from "../components/Profile/ProfileMyProducts";

const Profile = () => {
    return (
        <PageContainer>
            <div className={'profile profile_container'}>

                <ProfileNavigation/>
                <ProfileMyProducts/>

            </div>

        </PageContainer>
    );
};

export default Profile;