import React, {useState} from 'react';
import s from "./styles/AddingMember.module.css";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import {ACCOUNT_ROUTE, QUESTS_ROUTE} from "../utils/consts";
import YellowInput from "../components/UI/input/YellowInput";
import YellowButton from "../components/UI/button/YellowButton";
import {addMembers} from "../http/mainAPI";
import {useNavigate} from "react-router-dom";

const AddingMember = () => {
    const [userId, setUserId] = useState();
    const [teamId, setTeamId] = useState();
    const navigate = useNavigate();
    let now = new Date();

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
                Особистий кабінет користувача(додавання члена команди)
            </div>
            <div className={s.titleDescription}>
                Якщо Ви запросите трьох друзів, то Вам надасться знижка <span className={s.yellow}>5%</span>.
                Якщо чотирьох - <span className={s.yellow}>10%</span>. Якщо 5 та більше - <span className={s.yellow}>15%</span>.
                Для того, щоб додати друга, введіть його унікальний id(видно в його кабінеті користувача),
                та номер команди, до якої ви бажаєте його додати.
            </div>
            <div className={s.mainBlock}>
                <div style={{marginBottom: "30px"}}>
                    <div style={{marginBottom: "10px"}}>Унікальний номер(id) члена команди, якого бажаєте додати до команди:</div>
                    <YellowInput type="text" value={userId} onChange={e => setUserId(e.target.value)} style={{width:"40%"}}/>
                </div>
                <div>
                    <div style={{marginBottom: "10px"}}>Унікальний номер(id) команди, до якої бажаєте додати члена комнади:</div>
                    <YellowInput type="text" value={teamId} onChange={e => setTeamId(e.target.value)} style={{width:"40%"}}/>
                </div>
                <YellowButton style={{marginTop: "40px"}} onClick={addMemberAsync}>
                    Додати
                </YellowButton>
            </div>
        </div>
    );
};

export default AddingMember;