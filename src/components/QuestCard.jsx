import React from 'react';
import s from './styles/QuestCard.module.css';

import {useTranslation} from "react-i18next";
import "../utils/i18next";

const QuestCard = (props) => {
    const {t} = useTranslation();
    return (
        <div className={s.container} {...props}>
            <div className={s.card}>
                <div className={s.pictureBlock}>
                    <img src={props.photo} alt="" className={s.picture}/>
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.description}>
                        <div> <span className={s.name}>{t("quest.name")}: </span>{props.name}</div>
                        <div><span className={s.name}>{t("quest.city")}: </span>{props.city}</div>
                        <div><span className={s.name}>{t("quest.address")}: </span>{props.address}</div>
                        <div><span className={s.name}>{t("quest.maxCount")}: </span>{props.maxCount}</div>
                        <div><span className={s.name}>{t("quest.price")}: </span>{props.price}</div>
                        <div><span className={s.name}>{t("quest.category")}: </span>{props.category}</div>
                        <div><span className={s.name}>{t("quest.difficulty_level")}: </span>{props.difficult}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestCard;