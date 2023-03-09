import React, {useState} from 'react';
import PageContainer from "../components/PageContainer";
import ProfileNavigation from "../components/Profile/ProfileNavigation/ProfileNavigation";
import ProfileActiveAuction from "../components/Profile/ProfileActiveAuction";
import ProfileMyAuction from "../components/Profile/ProfileMyAuction";
import ProfileActiveOrders from "../components/Profile/ProfileActiveOrders";
import ProfilePayments from "../components/Profile/ProfilePayments";
import ProfileHistory from "../components/Profile/ProfileHistory";
import ProfileAuction from "../components/Profile/ProfileAuction";

const Profile = () => {

    const [activeBlock, setActiveBlock] = useState('ActiveAuction');

    const Pages = [{
        title: 'Действующие аукционы',
        name: 'ActiveAuction'
    }, {
        title: 'Мои аукционы',
        name: 'MyAuction'
    }, {
        title: 'Активные',
        name: 'ActiveOrders'
    }, {
        title: 'Выплаты',
        name: 'Payments'
    }, {
        title: 'История',
        name: 'History'
    }, {
        title: 'Мои товары',
        name: 'Auction'
    }]

    const getPage = () => {
        switch (activeBlock) {
            case 'ActiveAuction':
                return <ProfileActiveAuction/>
            case 'MyAuction':
                return <ProfileMyAuction/>
            case 'ActiveOrders':
                return <ProfileActiveOrders/>
            case 'Payments':
                return <ProfilePayments/>
            case 'History':
                return <ProfileHistory/>
            case 'Auction':
                return <ProfileAuction/>
        }
    }

    return (
        <PageContainer>
            <div className={'profile'}>
                <h1 className={'profile__title'}>Профиль</h1>
                <div className={'profile_container'}>
                    <ProfileNavigation pages={Pages} setActive={setActiveBlock} active={activeBlock}/>
                    {
                        getPage()
                    }
                </div>
            </div>
        </PageContainer>
    );
};

export default Profile;