import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddBooking from './AddBooking';
import BookingList from './BookingList';
import EditBooking from "./EditBooking";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {ADD_BOOKING_ROUTE, BOOKING_LIST_ROUTE} from "../../utils/consts";



function Booking(props){

    return (
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={ADD_BOOKING_ROUTE} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={BOOKING_LIST_ROUTE} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
            </div>

    )


}

export default Booking;