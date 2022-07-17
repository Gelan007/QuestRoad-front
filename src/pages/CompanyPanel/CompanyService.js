import React, { useEffect, useState } from "react";
import {  Route, Link, NavLink, Routes } from "react-router-dom";


import Quest from "./Quest";
import axios from "axios";
import {QUEST_ROUTE} from "../../utils/consts";


function CompanyServices(props){


    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Quest/Comp",{
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(
                (respon) => {
                    console.log(respon);
                    console.log(respon.data);
                    localStorage.setItem("CompQues", JSON.stringify(respon.data));})
    },[]);
    return (

            <div >
                <nav>
                    <div >
                        <ul >

                            <li className="nav-item">
                                <Link to={QUEST_ROUTE} className="nav-link">Quest</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>


    )


}

export default  CompanyServices;