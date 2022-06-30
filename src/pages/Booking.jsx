import React, {useContext, useEffect, useState} from 'react';
import s from "./styles/Booking.module.css";
import dfltPhoto from "../img/квест 1.png";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import {ACCOUNT_ROUTE, BOOKING_ROUTE} from "../utils/consts";
import {Context} from "../index";

import {createBookingForm, getQuestById} from "../http/mainAPI";
import YellowInput from "../components/UI/input/YellowInput";
import YellowButton from "../components/UI/button/YellowButton";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../utils/i18next";


const Booking = () => {
    const {user} = useContext(Context);
    const [quest, setQuest] = useState([]);
    const [teamName, setTeamName] = useState(`team ${localStorage.getItem("userName")}`);
    const [countOfUsers, setCountOfUsers] = useState(0);
    const [description, setDescription] = useState("-");
    const [date, setDate] = useState("");
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        getQuest();
    }, [])

    async function getQuest(){
        await getQuestById(parseInt(localStorage.getItem('questId'))).then((res) => {
            setQuest(res);
        })
    }

    async function createBooking(){
        try {
            await createBookingForm(parseInt(localStorage.getItem('questId')), teamName, countOfUsers, description, date);
            alert(`Ви успішно записались на квест ${quest.name}!`);
            navigate(ACCOUNT_ROUTE);
        } catch {
            alert("Щось пішло не так. Спробуйте перезайти в особистий кабінет та попробуйте ще раз");
        }
    }



    return (
        <div>
            <div className={s.mainTitle}>
                <span style={{fontSize:"20px", fontWeight: "700"}}>{t("booking.quest")} </span> <span style={{fontSize:"20px"}}>{quest.name}</span>
            </div>
            <p className={s.photoP}> <img src={quest.photo != null ? quest.photo : dfltPhoto} alt="Фотографія квесту" className={s.photo}/></p>
            <ul className={s.description}>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("booking.userCount")} </span> <span className={s.descriptionValue}>{quest.max_count_users}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("booking.price")} </span> <span className={s.descriptionValue}>{quest.price}</span>
                </li>
            </ul>

            <div className={s.title}>
                {t("booking.onlineBooking")}
            </div>

            <div className={s.inputFields}>
                <div className={s.block}>
                    <div className={s.inputText}>Дата:</div>
                    <YellowInput onChange={(e) => {
                        const selectedDate = e.target.value;
                        setDate(selectedDate);
                    }} type="datetime-local" placeholder="date" style={{marginBottom: "35px", width:"380px"}} value={date} />
                </div>
                <div className={s.block}>
                    <div className={s.inputText}>{t("booking.teamName")}</div>
                    <YellowInput type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} style={{marginBottom: "35px", width:"380px"}}/>
                </div>
                <div className={s.block}>
                    <div className={s.inputText}>{t("booking.userCountInTeam")}</div>
                    <YellowInput type="text" value={countOfUsers} onChange={(e) => setCountOfUsers(e.target.value)} style={{marginBottom: "35px", width:"380px"}}/>
                </div>
                <div className={s.block}>
                    <div className={s.inputText}>{t("booking.Description")}</div>
                    <YellowInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={{width:"380px"}}/>
                </div>
            </div>

            <YellowButton  style={{marginBottom: "50px", marginLeft: "190px", marginTop: "55px"}}
                           onClick={createBooking}>
                {t("booking.makeBook")}
            </YellowButton>


        </div>
    );
};

export default Booking;