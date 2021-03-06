import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import "./styles/About.css";
import doctor from "../img/Twelth_Doctor 1.png";
import spider from "../img/spider-man 1.png";
import inst from "../img/instagram_icon 1.svg";
import facebook from "../img/facebook_icon 1.svg";
import youtube from "../img/youtube_logo_mint_icon 1.svg";
import BigGreenButton from "../components/UI/button/BigGreenButton";
import {Link} from "react-router-dom";
import {QUESTS_ROUTE} from "../utils/consts";

import {useTranslation} from "react-i18next";
import "../utils/i18next";


const About = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className="main-content">
                <div className="main-content__title">
                    {t("about.timeToQuest")}
                </div>
                <div className="main-content__text">
                    {t("about.universalPlatform")}
                </div>
                <Link to={QUESTS_ROUTE}>
                    <BigGreenButton>
                        {t("about.goTo")}
                    </BigGreenButton>
                </Link>
            </div>

            <div className="pictures">
                <img src={spider} alt="" className="second-picture"/>
                <img src={doctor} alt="" className="first-picture"/>
            </div>

            <div className="social-media">
                <a href="#"><img src={inst} alt="instagram" className="inst"/></a>
                <a href="#"><img src={facebook} alt="facebook" className="facebook"/></a>
                <a href="#"><img src={youtube} alt="youtube" className="youtube"/></a>
            </div>
        </div>
    );
};

export default About;