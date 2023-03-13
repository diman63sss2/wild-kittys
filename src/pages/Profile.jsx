import React, {useState} from 'react';
import PageContainer from "../components/PageContainer";
import ProfileNavigation from "../components/Profile/ProfileNavigation/ProfileNavigation";
import ProfileActiveAuction from "../components/Profile/ProfileActiveAuction";
import ProfileMyAuction from "../components/Profile/ProfileMyAuction";
import ProfileActiveOrders from "../components/Profile/ProfileActiveOrders";
import ProfilePayments from "../components/Profile/ProfilePayments";
import ProfileHistory from "../components/Profile/ProfileHistory";
import ProfileMyProducts from "../components/Profile/ProfileMyProducts/ProfileMyProducts";
import ProfileAuction from "../components/Profile/ProfileAuction";
import image1 from '../img/activeAuctionImage.png'
import image2 from '../img/auction-image.png'
import image3 from '../img/order_image.png'
import image21 from '../img/AuctionImage2.png'
import image22 from '../img/AuctionsImage2.png'
import image23 from '../img/OrderImage2.png'
const Profile = () => {

    const [activeBlock, setActiveBlock] = useState('ActiveAuction');
    const [content, setContent] = useState([])
    const ListTest=[{
        image1:image1,
        image2: image2,
        image3:image3,
        title:"Девочки",
        startPrice:"999.00",
        nowPrice:"993.00",
        myPrice: "99.00",
        client:"boy666",
        logical:"СДЭК",
        data:"07.01.2023",
        status:"в пути",
        commission:"20.00",
        minPrice:"99.00"
    },{
        image1:image21,
        image2:image22,
        image3:image23,
        title:"Другие девочки",
        startPrice:"222.00",
        nowPrice:"100.00",
        myPrice:"100.00",
        client:"girl777",
        logical:"Почта России",
        data:"01.11.2023",
        status:"Ожидание",
        commission:"10.00",
        minPrice:"70.00"
    },{
        image1:image1,
        image2: image2,
        image3:image3,
        title:"Девочки",
        startPrice:"999.00",
        nowPrice:"993.00",
        myPrice: "99.00",
        client:"boy666",
        logical:"СДЭК",
        data:"07.01.2023",
        status:"в пути",
        commission:"20.00",
        minPrice:"99.00"
    },{
        image1:image21,
        image2:image22,
        image3:image23,
        title:"Другие девочки",
        startPrice:"222.00",
        nowPrice:"100.00",
        myPrice:"100.00",
        client:"girl777",
        logical:"Почта России",
        data:"01.11.2023",
        status:"Ожидание",
        commission:"10.00",
        minPrice:"70.00"
    }]

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
                return <ProfileActiveAuction props={ListTest} setActive={setActiveBlock} active={activeBlock} setContent={setContent}/>
            case 'MyAuction':
                return <ProfileMyAuction props={ListTest}  setActive={setActiveBlock} active={activeBlock} setContent={setContent}/>
            case 'ActiveOrders':
                return <ProfileActiveOrders props={ListTest}/>
            case 'Payments':
                return <ProfilePayments props={ListTest}/>
            case 'History':
                return <ProfileHistory props={ListTest}/>
            case 'Auction':
                return <ProfileMyProducts/>
            case 'AuctionItem':
                return <ProfileAuction props={content}/>
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