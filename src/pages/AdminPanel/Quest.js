import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddQuest from './AddQuest';
import QuestList from './QuestList';
import EditQuest from "./EditQuest";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {ADD_QUEST_ROUTE, QUEST_LIST_ROUTE} from "../../utils/consts";



function Quest(props){

    return (

            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={ADD_QUEST_ROUTE} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={QUEST_LIST_ROUTE} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>

            </div>

    )


}

export default Quest;