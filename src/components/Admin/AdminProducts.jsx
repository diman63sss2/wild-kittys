import React from 'react';
import AdminAddProducts from "./AdminAddProducts";
import './Admin_styles/AdminAddProducts.css';

const AdminProducts = () => {
    return (
        <div className={'products'}>
            <div className={'container'}>
                <div className={'products__content'}>
                    <h1 className="products__name">Менеджмент товаров</h1>
                    <AdminAddProducts name={'Девочки'} price={'9999.99'} pack={'1'}/>
                    <AdminAddProducts name={'Девочки'} price={'9999.99'} pack={'1'}/>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;