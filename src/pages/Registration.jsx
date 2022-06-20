import React , {useState} from 'react';
import Navbar from "../components/UI/Navbar/Navbar";
import s from "./styles/RegistrationAndLogin.module.css";
import {LOGIN_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import {useNavigate, Link } from 'react-router-dom';
import YellowButton from "../components/UI/button/YellowButton";
import questPicture from "../img/квест 1.png";
import {registration} from "../http/userAPI";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const signIn = async () => {
        try {
            await registration(email, phone, password, userName)
            navigate(LOGIN_ROUTE);
        } catch (e){
            alert("Користувач з такою поштою вже існує")
        }
    }

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
                        <YellowInput style={{marginBottom: '28px'}} value={userName} onChange={e => setUserName(e.target.value)}/>
                        <p className={s.inputText}>Введіть електронну скриньку</p>
                        <YellowInput style={{marginBottom: '28px'}} value={email} onChange={e => setEmail(e.target.value)}/>
                        <p className={s.inputText}>Введіть номер телефону</p>
                        <YellowInput style={{marginBottom: '28px'}} value={phone} onChange={e => setPhone(e.target.value)}/>
                        <p className={s.inputText}>Введіть пароль</p>
                        <YellowInput type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <YellowButton onClick={signIn}>
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