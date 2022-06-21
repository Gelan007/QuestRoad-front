import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Booking from "./Booking";
import Database from "./Database";
import Company from "./Company";
import Quest from "./Quest";
import axios from "axios";
import User from "./User";
import {BOOKING_ADMIN_ROUTE, COMPANY_ROUTE, QUEST_ROUTE} from "../../utils/consts";

function Services(props){

    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Quest",{
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
                    localStorage.setItem("ques", JSON.stringify(respon.data));})
    },[]);
    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Booking",{
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
                    localStorage.setItem("book", JSON.stringify(respon.data));})
    },[]);
    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Company",{
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
                    localStorage.setItem("comp", JSON.stringify(respon.data));})
    },[]);

    useEffect(() => {
        axios
            .get("https://localhost:44379/api/User",{
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
                    localStorage.setItem("use", JSON.stringify(respon.data));})
    },[]);
    
    return (
            <div >
                <nav>
                    <div >
                        <ul >
                            
                            <li className="nav-item">
                                <Link to={COMPANY_ROUTE} className="nav-link">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={QUEST_ROUTE} className="nav-link">Quest</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={BOOKING_ADMIN_ROUTE} className="nav-link">Booking</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link to={'./User'} className="nav-link">User</Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>
    
    )


}

export default  Services;