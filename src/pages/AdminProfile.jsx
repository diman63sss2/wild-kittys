import React, {useState} from 'react';
import AdminProducts from "../components/Admin/AdminProducts";
import AdminUsers from "../components/Admin/AdminUsers";
import AdminOrders from "../components/Admin/AdminOrders";
import AdminSellerPage from "../components/Admin/AdminSellerPage";

const AdminProfile = () => {

    const [activeBlock, setActiveBlock] = useState('Products');

    const setWindow = () => {
        switch (activeBlock) {
            case 'Products':
                return <AdminProducts/>
            case 'Users':
                return <AdminUsers/>
            case 'Orders':
                return <AdminOrders/>
            case 'SellerPage':
                return <AdminSellerPage/>
        }
    }

    return (
        <div className={'admin'}>
            <div className={'container'}>
                <h1>Панель администратора</h1>
                <div className={'admin__content'}>
                    <div className={'admin__panel'}>
                        <ul className={'admin__panel__list'}>
                            <li className={'admin__panel__products'} onClick={() => setActiveBlock('Products')}>Менеджмент товаров</li>
                            <hr/>
                            <li className={'admin__panel__users'} onClick={() => setActiveBlock('Users')}>Пользователи</li>
                            <hr/>
                            <li className={'admin__panel__orders'} onClick={() => setActiveBlock('Orders')}>Заказы</li>
                            <hr/>
                            <li className={'admin__panel__seller_page'} onClick={() => setActiveBlock('SellerPage')}>Страница продавца</li>
                        </ul>
                    </div>
                    <div className={'admin__window'}>
                        {setWindow()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;