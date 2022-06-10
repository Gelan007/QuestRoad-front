import React from 'react';
import s from "./styles/RegistrationAndLogin.module.css";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import YellowButton from "../components/UI/button/YellowButton";
import questPicture from "../img/квест 1.png";

const Login = () => {
    return (
        <div className={s.container}>
            <div className={s.leftBlock}>
                <div className={s.greetings}>
                    <div className={s.greetingsTitle}>
                        Вітаємо Вас в <span className={s.greetingsTitleLogo}> QuestRoad </span>
                    </div>
                    <div className={s.greetingsText}>
                        У Вас немає облікового запису? Зареєструйтесь <Link to={REGISTRATION_ROUTE} className={s.greetingsLink}>тут</Link>
                    </div>
                </div>
                <div className={s.registration}>
                    <div className={s.registrationTitle}>
                        Увійти
                    </div>
                    <div className={s.inputFields}>
                        <p className={s.inputText}>Введіть електронну скриньку</p>
                        <YellowInput style={{marginBottom: '28px'}}/>
                        <p className={s.inputText}>Введіть пароль</p>
                        <YellowInput type="password"/>
                    </div>
                    <YellowButton>
                        Увійти
                    </YellowButton>
                </div>
            </div>
            <div className={s.rightBlock}>
                <img src={questPicture} alt="QuestRoad" className={s.picture}/>
            </div>
        </div>
    );
};

export default Login;