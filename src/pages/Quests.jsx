import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import {AppBar, Container, Toolbar, IconButton, Typography, Paper, Box, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';

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
        flexGrow: 1
    },
    cardGrid:{
        marginTop: theme.spacing(4)
    }
}))

const Quests = () => {
    async function getQuests(){

        let res = await fetch("https://localhost:44332/api/Quest/Popular", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        res = await res.json();
        // Установка в localStorage всех данных о квесте в формате массива
        let names = [];
        for(var i in res ){
            names[i] = res[i];
        }
        localStorage.setItem("quests", JSON.stringify(names));
        console.log(localStorage.getItem("quests"));
    }

    getQuests();
    var items = JSON.parse(localStorage.getItem("quests"));
    const classes = useStyles();



    function setStateQuestId(id){
        localStorage.setItem("questId", id);
        console.log(localStorage.getItem("questId"));
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
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>QuestRoad service</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>  {t("quest.title")}</Typography>
                    <Grid container spacing={2} justify="center">
                    </Grid>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {JSON.parse(localStorage.getItem("quests")).map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.photo}
                                    title="image title"/>
                                <CardContent className={classes.cardContent}>
                                    <NavLink to="/detailedCar" onClick={ () => setStateQuestId(card.quest_id)}>
                                        <Typography variant="h5" gutterBottom>
                                            {card.model}
                                        </Typography>
                                    </NavLink>
                                    <Typography>
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