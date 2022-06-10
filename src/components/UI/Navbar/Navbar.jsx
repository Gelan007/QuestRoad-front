import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../../../img/logo.png";
import account from "../../../img/account.png";
const Navbar = () => {

    return (
        <div className={s.navbar}>
            <div className={s.logoAndText}>
                <Link to="/" className={s.logo}><img src={logo} alt="QR"/></Link>
                <Link to="/" className={s.logoText}>QuestRoad</Link>
            </div>
            <ul className={s.navbarUl}>
                <li className={s.li}> <NavLink to="/" className={({ isActive }) =>(isActive ? s.first + " " + s.link + " " + s.active : s.first + " " + s.link)}>Головна</NavLink></li>
                <li className={s.li}><NavLink to="/posts" className={({ isActive }) =>(isActive ? s.link + " " + s.active : s.link)}>Квести</NavLink></li>
                <li className={s.li}> <NavLink to="/sdas" className={({ isActive }) =>(isActive ? s.link + " " + s.active : s.link)}>Подати заяву на створення квесту</NavLink></li>
            </ul>
            <NavLink to="/" className={({ isActive }) =>(isActive ? s.number + " " + s.active : s.number)} >+380-95-87-54-120</NavLink>

            <div className={s.accountBlock}>
                <Link to="/login" className={s.accountBlockPicture}><img src={account} alt="Account"/></Link>
                <NavLink to="/login" className={({ isActive }) =>(isActive ? s.accountBlockText + " " + s.active : s.accountBlockText)}>Увійти/Реєстрація</NavLink>
            </div>
        </div>
    );
};

export default Navbar;