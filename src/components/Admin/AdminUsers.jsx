import React from 'react';
import AdminUsersItem from "./AdminUsersItem/AdminUsersItem";
import "./Admin_styles/AdminUsers.css"

const AdminUsers = () => {
    return (
        <div className={'users'}>
            <div className={'window__container'}>
                <div className={'users__content'}>
                    <h2 className={'users__header'}>Пользователи</h2>
                    <div className={'users__blocks'}>
                        <div className={'users__blocks__sellers'}>
                            <h4>Продавцы</h4>
                            <ul className={'users__blocks__sellers__list'}>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'KalimVododin'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'Devo4ek_net'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'me_and_my_daughter'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'CuteTyan'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'sale_all_day'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'ебУpator000'}/>
                                <AdminUsersItem className={'users__blocks__sellers__item'} name={'1o111y'}/>
                            </ul>
                        </div>
                        <div className={'users__blocks__customers'}>
                            <h4>Покупатели</h4>
                            <ul className={'users__blocks__sellers__list'}>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'NeKupriyanov'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'Strelkov_YD'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'i_want_a_wife'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'G1veMeM0re'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'Сушков_Дмитрий_Олегович'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'4п0kер'}/>
                                <AdminUsersItem className={'users__blocks__sellers__list'} name={'Zavodildo'}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;