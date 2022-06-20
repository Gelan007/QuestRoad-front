import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../../../img/logo.png";
import account from "../../../img/account.png";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {ACCOUNT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, QUESTS_ROUTE, RIGHTS_ROUTE} from "../../../utils/consts";
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
                        Головна
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={QUESTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        Квести
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={RIGHTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        Подати заяву на створення квесту
                    </NavLink>
                    </li>
                    <li className={s.li}>
                        {isCompany()}
                    </li>

                </ul>
                :
                <ul className={s.navbarUl}>
                    <li className={s.li}><NavLink to={HOME_ROUTE}
                                                  className={({isActive}) => (isActive ? s.first + " " + s.link + " " + s.active : s.first + " " + s.link)}>
                        Головна
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={QUESTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        Квести
                    </NavLink>
                    </li>
                    <li className={s.li}><NavLink to={RIGHTS_ROUTE}
                                                  className={({isActive}) => (isActive ? s.link + " " + s.active : s.link)}>
                        Подати заяву на створення квесту
                    </NavLink>
                    </li>
                </ul>
            }

                <a href="tel:380958754120" className={s.number} >
                    +380-95-87-54-120
                </a>
            {user.isAuth ?
                <div className={s.accountBlock}>
                    <Link to={ACCOUNT_ROUTE} className={s.accountBlockPicture}><img src={account} alt="Account"/></Link>
                    <NavLink to={ACCOUNT_ROUTE}
                             className={({ isActive }) =>(isActive ? s.accountBlockText + " " + s.active : s.accountBlockText)}>
                        Особистий кабінет
                    </NavLink>
                </div>
                :
                <div className={s.accountBlock}>
                    <Link to={LOGIN_ROUTE} className={s.accountBlockPicture}><img src={account} alt="Account"/></Link>
                    <NavLink to={LOGIN_ROUTE}
                             className={({ isActive }) =>(isActive ? s.accountBlockText + " " + s.active : s.accountBlockText)}>
                        Увійти/Реєстрація
                    </NavLink>
                </div>
            }
        </div>
    );
});

export default Navbar;