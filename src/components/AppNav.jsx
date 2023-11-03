import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AppNav = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={(isPending) => isPending ? "pending-item" : "active-item"} to='/'>Home</NavLink></li>
                <li><NavLink className={(isActive) => isActive ? "active-item" : "pending-item"} to='/product/10/IPhone_14'>Product</NavLink></li>
                <li><NavLink className={(isActive) => isActive ? "active-item" : "pending-item"} to='/profile/mdmehedi1903/ctgmehedi'>Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default AppNav;
