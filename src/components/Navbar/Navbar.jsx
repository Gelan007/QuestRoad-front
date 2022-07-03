import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../../img/logo.png";
import account from "../../img/account.png";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ACCOUNT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, QUESTS_ROUTE, RIGHTS_ROUTE} from "../../utils/consts";
import {useTranslation} from "react-i18next";
import  "../../utils/i18next";

const Navbar = observer(() => {

    const {user} = useContext(Context);

    function isCompany(){
        if(localStorage.getItem("isAdminIn")== 3){
            return (
                <NavLink
                    className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}
                    to="/companyServices"
                    activeClassName={s.active}
                >
                    Панель
                </NavLink>
            )
        }
    }

    function isAdmin(){
        if(localStorage.getItem("isAdminIn")== "2"){
            console.log(localStorage.getItem("isAdminIn"));
            return (
                <NavLink
                    className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}
                    to="/services"
                    activeClassName={s.active}
                >
                    Панель
                </NavLink>
            )
        }
    }

    const {i18n} = useTranslation();
    const {t} = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };


    return (
        <div className={s.navbar}>
            <div className={s.logoAndText}>
                <Link to={HOME_ROUTE} className={s.logo}><img src={logo} alt="QR"/></Link>
                <Link to={HOME_ROUTE} className={s.logoText}>QuestRoad</Link>
            </div>
            {user.isAuth ?
                <ul className={s.navbarUl}>
                    <li className={s.li}><NavLink to={HOME_ROUTE}
                                                  className={({isActive}) => (isActive ? s.first + " " + s.link + " " + s.active : s.first + " " + s.link)}>
                        {t("header.main")}
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={QUESTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        {t("header.quests")}
                    </NavLink>
                    </li>

                    <li className={s.li}>
                        {isCompany()}
                    </li>
                    <li className={s.li}>
                        {isAdmin()}
                    </li>
                </ul>
                :
                <ul className={s.navbarUl}>
                    <li className={s.li}><NavLink to={HOME_ROUTE}
                                                  className={({isActive}) => (isActive ? s.first + " " + s.link + " " + s.active : s.first + " " + s.link)}>
                        {t("header.main")}
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={QUESTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        {t("header.quests")}
                    </NavLink>
                    </li>

                </ul>
            }

                <a href="tel:380958754120" className={s.number} >
                    +380-95-87-54-120
                </a>
            <div style={{marginLeft: "30px"}}>
                <button onClick={() => changeLanguage("ua")} id="uaCss" style={{cursor: "pointer", marginRight:"5px"}}>UA</button>
                <button onClick={() => changeLanguage("eng")} style={{cursor: "pointer"}}>ENG</button>
            </div>

            {user.isAuth ?
                <div className={s.accountBlock}>
                    <Link to={ACCOUNT_ROUTE} className={s.accountBlockPicture}><img src={account} alt="Account"/></Link>
                    <NavLink to={ACCOUNT_ROUTE}
                             className={({ isActive }) =>(isActive ? s.accountBlockText + " " + s.active : s.accountBlockText)}>
                        {t("header.cabinet")}
                    </NavLink>
                </div>
                :
                <div className={s.accountBlock}>
                    <Link to={LOGIN_ROUTE} className={s.accountBlockPicture}><img src={account} alt="Account"/></Link>
                    <NavLink to={LOGIN_ROUTE}
                             className={({ isActive }) =>(isActive ? s.accountBlockText + " " + s.active : s.accountBlockText)}>
                        {t("header.enter")}
                    </NavLink>
                </div>
            }
        </div>
    );
});

export default Navbar;