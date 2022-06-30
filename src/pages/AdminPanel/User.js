import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddUser from './AddUser';
import UserList from './UserList';
import EditUser from "./EditUser";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {ADD_USER_ROUTE, USER_LIST_ROUTE} from "../../utils/consts";



function User(props){

    return (
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={ADD_USER_ROUTE} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={USER_LIST_ROUTE} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>

    )


}

export default User;