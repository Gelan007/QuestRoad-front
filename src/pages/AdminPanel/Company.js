import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddCompany from './AddCompany';
import CompanyList from './CompanyList';
import EditCompany from "./EditCompany";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {ADD_COMPANY_ROUTE, COMPANY_LIST_ROUTE} from "../../utils/consts";



function Company(props){

    return (

            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={ADD_COMPANY_ROUTE} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={COMPANY_LIST_ROUTE} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>


    )


}

export default Company;