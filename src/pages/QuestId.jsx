import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getQuestById} from "../http/mainAPI";

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

        </div>
    );
};

export default QuestId;