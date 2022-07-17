import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getQuestById} from "../http/mainAPI";
import s from "./styles/QuestId.module.css";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import dfltPhoto from "../img/квест 1.png";
import {Context} from "../index";
import {BOOKING_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

import {useTranslation} from "react-i18next";
import "../utils/i18next";

const QuestId = observer(() => {
    const params = useParams();
    const [quest, setQuest] = useState([]);
    const [questPhoto, setQuestPhoto] = useState(null);
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        getQuest();
        user.setQuestId(parseInt(params.id));
        localStorage.setItem('questId', params.id)
    }, [])

    async function getQuest(){
        await getQuestById(parseInt(params.id)).then((res) => {
            setQuest(res);
            setQuestPhoto(res.photo);
        })
    }


    return (
        <div>
            <div className={s.mainTitle}>
                <span style={{fontSize:"20px", fontWeight: "700"}}>Квест: </span> <span style={{fontSize:"20px"}}>{quest.name}</span>
            </div>
            <p className={s.photoP}> <img src={quest.photo != null ? quest.photo : dfltPhoto} alt="Фотографія квесту" className={s.photo}/></p>
            <ul className={s.description}>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.name")} </span> <span className={s.descriptionValue}>{quest.name}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.count")} </span> <span className={s.descriptionValue}>{quest.actors}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.address")} </span> <span className={s.descriptionValue}>{quest.adress}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.category")} </span> <span className={s.descriptionValue}>{quest.category}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.city")} </span> <span className={s.descriptionValue}>{quest.city}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.difficulty_level")} </span> <span className={s.descriptionValue}>{quest.difficulty_level}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.maxCount")} </span> <span className={s.descriptionValue}>{quest.max_count_users}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>{t("questId.price")} </span> <span className={s.descriptionValue}>{quest.price}</span>
                </li>
                <li style={{marginBottom: "60px"}}>
                    <span className={s.descriptionName}>{t("questId.desc")} </span> <span className={s.descriptionValue}>{quest.description}</span>
                </li>
            </ul>
            <BigGreenButton style={{marginBottom: "80px"}}
                            onClick={user.isAuth == true ? (() => navigate(BOOKING_ROUTE)) : () => alert("Спочатку необхідно авторизуватись")}>

                {t("questId.book")}
            </BigGreenButton>
        </div>
    );
});

export default QuestId;