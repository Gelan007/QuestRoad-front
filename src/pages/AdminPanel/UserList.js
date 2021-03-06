import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useHistory, useNavigate} from "react-router-dom";
import {EDIT_USER_ROUTE} from "../../utils/consts";
import YellowButton from "../../components/UI/button/YellowButton";





function UserList(){
    const navigate = useNavigate();
    async function deleteUser(id){
        await fetch("https://localhost:44379/api/User/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
    }

    const editUser = (id)=>{
        localStorage.setItem("UserId",id);
        navigate({
            pathname : EDIT_USER_ROUTE
        })
    }

    async function getUsers(){
        let res = await fetch("https://localhost:44379/api/User", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
        res = await res.json();
        localStorage.setItem("use", JSON.stringify(res));
    }



    function callTwoFunctions(id){
        deleteUser(id);
        getUsers();
    }



    //debugger;
    getUsers();


    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Users List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                <tr>
                                    <th>User id</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    {/*<th>Password</th>*/}
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Company id</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    JSON.parse(localStorage.getItem("use")).map((item,idx)=>{
                                        return <tr key={idx}>
                                            <td>{item.user_id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            {/*<td>{item.password}</td>*/}
                                            <td>{item.name}</td>
                                            <td>{item.role}</td>
                                            <td>{item.company_id}</td>
                                            <td>
                                                <row>
                                                    <YellowButton onClick={()=>editUser(item.user_id)}>Edit</YellowButton>
                                                </row>
                                                <row>
                                                    -
                                                </row>
                                                <row>
                                                    <YellowButton  onClick={()=>callTwoFunctions(item.user_id)}>Delete</YellowButton>
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
export default UserList;


