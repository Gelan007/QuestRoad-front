import React, {useContext, useEffect, useState} from 'react';
import s from './styles/Account.module.css'
import {Context} from "../index";
import {getUserAccountInfo, getUserBookings, getUserQuests} from "../http/mainAPI";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import {useNavigate} from "react-router-dom";
import {ADDING_MEMBER_ROUTE, LOGIN_ROUTE, QUESTS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import YellowButton from "../components/UI/button/YellowButton";

const Account = observer(() => {
    const [bookings, setBookings] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [quests, setQuests] = useState([]);
    const [questsName, setQuestsName] = useState([]);
    const navigate = useNavigate();
    const {user} = useContext(Context);

        useEffect(   () => {
            getUserBooking();
            getUserInfo();
            getQuest();
            localStorage.removeItem("isAdminIn");
            localStorage.removeItem("companyId");

    }, [])


    async function getUserBooking() {
        await getUserBookings().then((res) => {
            setBookings(res);
        })
    }

    async function getUserInfo() {
        await getUserAccountInfo().then((res) => {
            setUserInfo(res);
            localStorage.setItem("userName", res.name);
            localStorage.setItem("isAdminIn", res.role);
            localStorage.setItem("companyId", res.company_id);
        })
    }
    async function getQuest() {
        await getUserQuests().then((res) => {
            setQuests(res);
        })
    }

    // function getQuestName () {
    //         let temp = 0;
    //         for (let i = 0; i < quests.length; i++) {
    //             for(let j = 0; j < bookings.length; j++){
    //                 if(quests[i].quest_id == bookings[j].quest_id){
    //                     // setQuestsName([...questsName, quests[i].name])
    //                 }
    //             }
    //         }
    // }

    function logout() {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token');
        navigate(LOGIN_ROUTE);
    }
    // console.log(userInfo)
    // console.log(bookings)

    return (
        <div>
            <div className={s.title}>
                Особистий кабінет користувача
            </div>
            <div className={s.titleDescription}>
                Якщо Ви запросите трьох друзів, то Вам надасться знижка <span className={s.yellow}>5%</span>.
                Якщо чотирьох - <span className={s.yellow}>10%</span>. Якщо 5 та більше - <span className={s.yellow}>15%</span>.
                Для того, щоб додати друга, введіть його унікальний id(видно в його кабінеті користувача),
                та номер команди, до якої ви бажаєте його додати.
            </div>
            <div className={s.mainBlock}>
                <div className={s.leftPart}>
                    <div className={s.recordsTitle}>
                        Ваші записи на квести:
                    </div>
                    <div className={s.dataAndPrice}>
                        {
                        bookings.map((item, idx) =>{
                        return <ul key={idx}>
                            <li  style={{paddingLeft:"15px"}}>Дата: {item.time}</li>
                            <li style={{paddingLeft:"15px"}}>Ціна: {item.price} грн</li>
                            <li style={{paddingLeft:"15px"}}>Номер(id) цієї команди: {item.team_id}</li>
                            <div className={s.space}></div>
                        </ul>
                    })
                    }
                    </div>
                    <BigGreenButton style={{width: "160px", height:"45px", fontSize: "15px"}} onClick={() => navigate(QUESTS_ROUTE)}>
                        Забронювати
                    </BigGreenButton>
                </div>
                <YellowButton style={{marginTop:"auto", fontSize:"13px", fontWeight: "600"}}
                              onClick={() => navigate(ADDING_MEMBER_ROUTE)}>
                    Додати члена команди
                </YellowButton>
                <div className={s.rightPart}>
                    <div className={s.rightTitle}>
                        <span className={s.rightTitleHello}>Доброго дня,</span>
                        <span className={s.userName}> {userInfo.name}</span>
                        <div className={s.userEmail}>
                            {userInfo.email}
                        </div>
                        <div className={s.userId}>
                            Ваш унікальний id: <span className={s.id}>{userInfo.user_id}</span>
                        </div>
                    </div>

                    <BigGreenButton style={{width: "160px", height:"45px", fontSize: "15px", marginLeft: "auto"}} onClick={logout}>
                        Вийти з акаунту
                    </BigGreenButton>
                </div>
            </div>
        </div>
    );
});

export default Account;