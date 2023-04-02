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
                changeActive('.admin__panel__products');
                return <AdminProducts/>
            case 'Users':
                changeActive('.admin__panel__users');
                return <AdminUsers/>
            case 'Orders':
                changeActive('.admin__panel__orders');
                return <AdminOrders/>
            case 'SellerPage':
                changeActive('.admin__panel__seller_page');
                return <AdminSellerPage/>
        }
    }

    const changeActive = (str) => {
        document.querySelectorAll('.admin__panel__list li').forEach(li => {
            if (li === document.querySelector(str)) {
                li.classList.add('admin__panel__active');
            }
            else {
                li.classList.remove('admin__panel__active');
            }
        })
    }

    return (
        <div className={'admin'}>
            <div className={'container'}>
                <h1>Панель администратора</h1>
                <div className={'admin__content'}>
                    <div className={'admin__panel'}>
                        <ul className={'admin__panel__list'}>
                            <li className={'admin__panel__products admin__panel__active'} onClick={() => setActiveBlock('Products')}>Менеджмент товаров</li>
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