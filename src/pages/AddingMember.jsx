import React, {useState} from 'react';
import s from "./styles/AddingMember.module.css";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import {ACCOUNT_ROUTE, QUESTS_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import YellowButton from "../components/UI/button/YellowButton";
import {addMembers} from "../http/mainAPI";
import {useNavigate} from "react-router-dom";

import {useTranslation} from "react-i18next";
import "../utils/i18next";

const AddingMember = () => {
    const [userId, setUserId] = useState();
    const [teamId, setTeamId] = useState();
    const navigate = useNavigate();
    let now = new Date();
    const {t} = useTranslation();

    async function addMemberAsync () {
        try {
            await addMembers(parseInt(userId), parseInt(teamId), now).then((res) => {
                alert(`Ви успішно додали користувача під номером ${userId}`);
                navigate(ACCOUNT_ROUTE);
            });
        } catch {
            alert(`Щось пішло не так. Будь ласка, перепровірте введені дані та попробуйте ще раз`);
        }
    }

    return (
        <div>
            <div className={s.title}>
                {t("cabinet.userCabinet")}
            </div>
            <div className={s.titleDescription}>
                {t("cabinet.desc1")} <span className={s.yellow}>5%</span>.
                {t("cabinet.desc2")} - <span className={s.yellow}>10%</span>. {t("cabinet.desc3")} - <span className={s.yellow}>15%</span>.
                {t("cabinet.desc4")}
            </div>
            <div className={s.mainBlock}>
                <div style={{marginBottom: "30px"}}>
                    <div style={{marginBottom: "10px"}}>{t("addingMember.uniqueNumberMember")}</div>
                    <YellowInput type="text" value={userId} onChange={e => setUserId(e.target.value)} style={{width:"40%"}}/>
                </div>
                <div>
                    <div style={{marginBottom: "10px"}}>{t("addingMember.uniqueNumberTeam")}</div>
                    <YellowInput type="text" value={teamId} onChange={e => setTeamId(e.target.value)} style={{width:"40%"}}/>
                </div>
                <YellowButton style={{marginTop: "40px"}} onClick={addMemberAsync}>
                    {t("addingMember.Add")}
                </YellowButton>
            </div>
        </div>
    );
};

export default AddingMember;