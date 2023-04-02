import React from 'react';
import "./AdminUsersItem.css"

const AdminUsersItem = (props) => {
    return (
        <li className={props.className}>
            {props.name}
        </li>
    );
};

export default AdminUsersItem;