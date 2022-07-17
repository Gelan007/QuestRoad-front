import React, {useEffect, useMemo, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink, useNavigate} from "react-router-dom";
import {AppBar, Container, Toolbar, IconButton, Typography, Paper, Box, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {Context} from "../index";
import {login} from "../http/userAPI";
import {getAllQuests, getPopularQuests, getUserQuests} from "../http/mainAPI";
import defaultQuestPhoto from "../img/квест 1.png";
import s from './styles/Quests.module.css';

import {useTranslation} from "react-i18next";
import "../utils/i18next";
import QuestCard from "../components/QuestCard";
import MySelect from "../components/UI/select/MySelect";
import YellowInput from "../components/UI/input/YellowInput";

const Quests = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();
    const [quests, setQuests] = useState([]);
    const [sortedQuests, setSortedQuests] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getQuests();
    }, [])

    useEffect(() => {
        checkAndSetSortedQuests();
    }, [selectedSort])

    useEffect(() => {
        searchSortedQuests();
    }, [searchQuery])


    async function getQuests(){
       await getPopularQuests().then((res) => {
            setQuests(res);
            setSortedQuests(res);
        });
    }

    const checkAndSetSortedQuests = () => {
        if(selectedSort === 'popularity'){
            setQuests(getQuests());
        }
        if(selectedSort != ''){
            setQuests([...quests].sort((a, b) => String(a[selectedSort]).localeCompare(String(b[selectedSort]))));
            setSortedQuests([...quests].sort((a, b) => String(a[selectedSort]).localeCompare(String(b[selectedSort]))));
        }
    }

    const searchSortedQuests = () => {
        if(searchQuery != ''){
            setQuests(sortedQuests.filter(quest => quest.name.includes(searchQuery)));
        } else if(searchQuery == ''){
            getQuests()
        }

    }

     const sortQuests = (sort) => {
        setSelectedSort(sort);
    }


    return (
        <div className={s.container}>
            <Container maxWidth="md" style={{marginTop: "50px"}}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="primary" gutterBottom style={{color: 'white'}}>QuestRoad service</Typography>
                    <Typography variant="h5" align="center" color="secondary" paragraph style={{color: 'white'}}>  {t("quest.title")}</Typography>
                </Container>
                <div className={s.sortContainer}>
                    <p><MySelect
                        value={selectedSort}
                        onChange={sortQuests}
                        defaultName="Сортировка по:"
                        options={[
                            {value: 'popularity', name: 'За популярністю'},
                            {value: 'name', name: 'Назва'},
                            {value: 'price', name: 'Ціна'},
                            {value: 'category', name: 'Категорія'}
                        ]}
                    /></p>
                    <p><YellowInput
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        style={{width: '32%', marginTop: '15px'}}
                        placeholder="Пошук..."
                    /></p>
                </div>
                <Grid container spacing={4} style={{marginTop: "20px"}}>
            {quests.map((card) => (
                <Grid item xs={12} sm={6} md={4}>
                    <QuestCard
                        onClick={() => navigate((`/quests/${parseInt(card.quest_id)}`))} style={{cursor:"pointer"}}
                        name={card.name}
                        city={card.city}
                        address={card.adress}
                        maxCount={card.max_count_users}
                        price={card.price}
                        category={card.category}
                        difficult={card.difficulty_level}
                        photo={card.photo != null ? card.photo : defaultQuestPhoto}
                        key={card.quest_id}
                    />

                </Grid>
            ))}
                </Grid>
            </Container>
        </div>

    )
};


export default Quests;