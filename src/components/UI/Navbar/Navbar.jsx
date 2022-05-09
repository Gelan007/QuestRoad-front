import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../../img/logo.png";
import account from "../../../img/account.png";
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <Link to="/about"><img src={logo} alt="QR"/></Link>
            <Link to="/about" className={classes.navbar__logo}>QuestRoad</Link>
            <Link to="/about">Головна</Link>
            <Link to="/posts" className={classes.navbar__item} >Квести</Link>
            <Link to="/" className={classes.navbar__item}>Подати заяву на створення квесту</Link>
            <Link to="/" className={classes.navbar__number} >+380-95-87-54-120</Link>
            <Link to="/about" className={classes.navbar__account}><img src={account} alt="Account"/></Link>
            <Link to="/" className={classes.navbar__text}>Увійти/Реєстрація</Link>
        </div>
    );
};

export default Navbar;