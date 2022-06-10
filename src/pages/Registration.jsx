import React from 'react';
import Navbar from "../components/UI/Navbar/Navbar";
import s from "./styles/RegistrationAndLogin.module.css";
import {LOGIN_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import {Link} from "react-router-dom";
import YellowButton from "../components/UI/button/YellowButton";
import questPicture from "../img/квест 1.png";

const Registration = () => {
    return (
        <div className={s.container}>
            <div className={s.leftBlock}>
                <div className={s.greetings}>
                    <div className={s.greetingsTitle}>
                        Вітаємо Вас в <span className={s.greetingsTitleLogo}> QuestRoad </span>
                    </div>
                    <div className={s.greetingsText}>
                        У вас вже є обліковий запис? Увійдіть <Link to={LOGIN_ROUTE} className={s.greetingsLink}>тут</Link>
                    </div>
                </div>
                <div className={s.registration}>
                    <div className={s.registrationTitle}>
                        Зареєструватися
                    </div>
                    <div className={s.inputFields}>
                        <p className={s.inputText}>Введіть Ваше ім'я</p>
                        <YellowInput style={{marginBottom: '28px'}}/>
                        <p className={s.inputText}>Введіть електронну скриньку</p>
                        <YellowInput style={{marginBottom: '28px'}}/>
                        <p className={s.inputText}>Введіть номер телефону</p>
                        <YellowInput style={{marginBottom: '28px'}}/>
                        <p className={s.inputText}>Введіть пароль</p>
                        <YellowInput type="password"/>
                    </div>
                    <YellowButton>
                        Зареєструватися
                    </YellowButton>
                </div>
            </div>
                <div className={s.rightBlock}>
                    <img src={questPicture} alt="QuestRoad" className={s.picture}/>
                </div>
        </div>

    );
};

export default Registration;