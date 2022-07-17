import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useNavigate} from "react-router-dom";
import {EDIT_BOOKING_ROUTE} from "../../utils/consts";
import YellowButton from "../../components/UI/button/YellowButton";





function BookingList(){
    const navigate = useNavigate();

    async function deleteBooking(id){
        try {
            let res = await fetch("https://localhost:44332/api/Booking/" + id, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("token"),
                },
            });
            alert("Success!")
        } catch {
            alert("Something went wrong");
        }

    }

    const editBooking = (id)=>{
        localStorage.setItem("BookingId",id);

        navigate({
            pathname : EDIT_BOOKING_ROUTE
        })

    }



    function callTwoFunctions(id){
        deleteBooking(id);
        getBookings();
    }


    async function getBookings(){

        let res = await fetch("https://localhost:44332/api/Booking", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
        res = await res.json();
        localStorage.setItem("book", JSON.stringify(res));

    }
    //debugger;
    getBookings();


    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Bookings List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                <tr>
                                    <th>Booking id</th>
                                    <th>Quest id</th>
                                    <th>Team id</th>
                                    <th>Price</th>
                                    <th>Time</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    JSON.parse(localStorage.getItem("book")).map((item,idx)=>{
                                        return <tr key={idx}>
                                            <td>{item.booking_id}</td>
                                            <td>{item.quest_id}</td>
                                            <td>{item.team_id}</td>
                                            <td>{item.price}</td>
                                            <td>{item.time}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <row>
                                                    <YellowButton onClick={()=>editBooking(item.booking_id)}>Edit</YellowButton>
                                                </row>
                                                <row>
                                                    -
                                                </row>
                                                <row>
                                                    <YellowButton onClick={()=>callTwoFunctions(item.booking_id)}>Delete</YellowButton>
                                                </row>
                                            </td>

                                        </tr>
                                    })
                                }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default BookingList;


