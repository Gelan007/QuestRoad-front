import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getQuestById} from "../http/mainAPI";
import s from "./styles/QuestId.module.css"
import BigGreenButton from "../components/UI/button/BigGreenButton";
import dfltPhoto from "../img/квест 1.png";
import {Card, CardMedia, Container} from "@material-ui/core";
import defaultQuestPhoto from "../img/квест 1.png";

const QuestId = () => {
    const params = useParams();
    const [quest, setQuest] = useState([]);

    useEffect(() => {
        getQuest();
    }, [])

    async function getQuest(){
        await getQuestById(parseInt(params.id)).then((res) => {
            setQuest(res);
        })
    }



    console.log(quest)
    return (
        <div>
            <div className={s.mainTitle}>
                <span style={{fontSize:"20px", fontWeight: "700"}}>Квест: </span> <span style={{fontSize:"20px"}}>{quest.name}</span>
            </div>
            <p className={s.photoP}> <img src={quest.photo != null ? quest.photo : dfltPhoto} alt="Фотографія квесту" className={s.photo}/></p>
            <ul className={s.description}>
                <li className={s.li}>
                    <span className={s.descriptionName}>Назва квесту: </span> <span className={s.descriptionValue}>{quest.name}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Кількість акторів: </span> <span className={s.descriptionValue}>{quest.actors}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Адреса: </span> <span className={s.descriptionValue}>{quest.adress}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Категорія: </span> <span className={s.descriptionValue}>{quest.category}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Город: </span> <span className={s.descriptionValue}>{quest.city}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Ріваень складності: </span> <span className={s.descriptionValue}>{quest.difficulty_level}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Максимальна кількість користувачів: </span> <span className={s.descriptionValue}>{quest.max_count_users}</span>
                </li>
                <li className={s.li}>
                    <span className={s.descriptionName}>Ціна: </span> <span className={s.descriptionValue}>{quest.price}</span>
                </li>
                <li style={{marginBottom: "60px"}}>
                    <span className={s.descriptionName}>Опис: </span> <span className={s.descriptionValue}>{quest.description}</span>
                </li>
            </ul>
            <BigGreenButton style={{marginBottom: "80px"}}
                            >
                Забронювати
            </BigGreenButton>
        </div>
    );
};

export default QuestId;