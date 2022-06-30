import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink, useNavigate} from "react-router-dom";
import {AppBar, Container, Toolbar, IconButton, Typography, Paper, Box, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {Context} from "../index";
import {login} from "../http/userAPI";
import {getAllQuests, getPopularQuests, getUserQuests} from "../http/mainAPI";
import defaultQuestPhoto from "../img/квест 1.png";

import {useTranslation} from "react-i18next";
import "../utils/i18next";

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1
    },
    mainFeaturePost:{
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturePostContent:{
        position: "relative",
        padding: theme.spacing(3)
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: '#757575'
    },
    cardGrid:{
        marginTop: theme.spacing(4)
    }
}))

const Quests = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();
    const [quests, setQuests] = useState([]);


    useEffect(() => {
        getQuests();
    })
    async function getQuests(){
        // let res = await fetch("https://localhost:44332/api/Quest/Popular", {
        //     method: 'GET',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //         "Authorization": "Bearer "+ localStorage.getItem("token"),
        //     },
        // });
        let res = await getAllQuests().then((res) => {
            setQuests(res);
        })

        // res = await res.json();
        // // Установка в localStorage всех данных о квесте в формате массива
        // let names = [];
        // for(var i in res ){
        //     names[i] = res[i];
        // }
        // localStorage.setItem("quests", JSON.stringify(names));
        // console.log(localStorage.getItem("quests"));
    }

    // getQuests();
    var items = JSON.parse(localStorage.getItem("quests"));
    const classes = useStyles();
    console.log(quests)


    function setStateQuestId(id){
        localStorage.setItem("questId", id);
        // console.log(localStorage.getItem("questId"));
    }


    return (
        <main>
            <Paper className={classes.mainFeaturePost}
                   style={{ }}>
                <Container fixed>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="white" gutterBottom>QuestRoad service</Typography>
                    <Typography variant="h5" align="center" color="white" paragraph>  {t("quest.title")}</Typography>
                    <Grid container spacing={2} justify="center">
                    </Grid>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} >
                    {quests.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card} onClick={() => navigate((`/quests/${parseInt(card.quest_id)}`))} style={{cursor:"pointer"}}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.photo != null ? card.photo : defaultQuestPhoto}
                                    title="image title"/>
                                <CardContent className={classes.cardContent}>
                                    <NavLink to="/detailedCar" onClick={ () => setStateQuestId(card.quest_id)}>
                                        <Typography variant="h5" gutterBottom>
                                            {card.model}
                                        </Typography>
                                    </NavLink>
                                    <Typography style={{backgroundColor: '#757575'}}>
                                        {t("quest.name")}: {card.name},<br/>
                                        {t("quest.city")}: {card.city}, <br/>
                                        {t("quest.address")}: {card.adress}, <br/>
                                        {t("quest.maxCount")}: {card.max_count_users}, <br/>
                                        {t("quest.price")}: {card.price},<br/>
                                        {t("quest.category")}: {card.category}, <br/>
                                        {t("quest.difficulty_level")}: {card.difficulty_level}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            </Container>
        </main>
    )
};


export default Quests;