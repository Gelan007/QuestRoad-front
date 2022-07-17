import React, { useEffect, useState } from "react";
import {  Link, NavLink, Route, Routes } from "react-router-dom";
import AddQuest from './AddQuest';
import QuestList from './QuestList';
import EditQuest from "./EditQuest";
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

                    {/*<Route path="/AddQuest" render={() => <AddQuest />} />*/}
                    {/*<Route path="/QuestList" render={() => <QuestList />} />*/}
                    {/*<Route path="/EditQuest" render={() => <EditQuest />} />*/}
                    {/* //<Route path="./OrganizationList" component={Org}/>  */}
            </div>


    )


}

export default Quest;