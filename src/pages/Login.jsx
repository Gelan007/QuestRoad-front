import React, {useContext, useState} from 'react';
import s from "./styles/RegistrationAndLogin.module.css";
import {Link, useNavigate} from "react-router-dom";
import {ACCOUNT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import YellowButton from "../components/UI/button/YellowButton";
import questPicture from "../img/квест 1.png";

import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

import {useTranslation} from "react-i18next";
import "../utils/i18next";


const Login = observer(() => {
    const {user} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {t} = useTranslation();

    const signOut = async () => {
        try {
            const response = await login(email, password)
            user.setUser(response);
            user.setIsAuth(true)
            navigate(ACCOUNT_ROUTE);
            console.log(user.isAuth)
        } catch {
            alert("Пошта чи пароль введі не вірно")
        }

    }

    return (
        <div className={s.container}>
            <div className={s.leftBlock}>
                <div className={s.greetings}>
                    <div className={s.greetingsTitle}>
                        {t("login.hello")} <span className={s.greetingsTitleLogo}> QuestRoad </span>
                    </div>
                    <div className={s.greetingsText}>
                        {t("login.registration")} <Link to={REGISTRATION_ROUTE} className={s.greetingsLink}>{t("login.here")}</Link>
                    </div>
                </div>
                <div className={s.registration}>
                    <div className={s.registrationTitle}>
                        {t("login.enter")}
                    </div>
                    <div className={s.inputFields}>
                        <p className={s.inputText}>{t("login.inputEmail")}</p>
                        <YellowInput style={{marginBottom: '28px'}} value={email} onChange={e => setEmail(e.target.value)}/>
                        <p className={s.inputText}>{t("login.inputPass")}</p>
                        <YellowInput type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <YellowButton onClick={signOut}>
                        {t("login.enter")}
                    </YellowButton>
                </div>
            </div>
            <div className={s.rightBlock}>
                <img src={questPicture} alt="QuestRoad" className={s.picture}/>
            </div>
        </div>
    );
});

export default Login;