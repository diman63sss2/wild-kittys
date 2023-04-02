import React from 'react';
import "./Admin_styles/AdminOrders.css"
import AdminOrdersItem from "./AdminOrdersItem/AdminOrdersItem";

const AdminOrders = () => {


    return (
        <div className={'orders'}>
            <div className={'orders__container'}>
                <div className={'orders__content'}>
                    <h3 className={'orders__content__header'}>Заказы</h3>
                    <div className={'orders__content__naming'}>
                        <p>№</p>
                        <p>клиент</p>
                        <p>товар</p>
                        <p>цена</p>
                        <p>логистика</p>
                        <p>заказан</p>
                        <p>статус</p>
                    </div>
                    <div className={'orders__content__list'}>
                        <AdminOrdersItem id={1} client={'boy666'} product={'дуэт'} price={999.00} logic={'СДЭК'} date={'01.01.2023'} status={'в очереди на отправку'}/>
                        <AdminOrdersItem id={1} client={'boy666'} product={'дуэт'} price={999.00} logic={'СДЭК'} date={'01.01.2023'} status={'в очереди на отправку'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;