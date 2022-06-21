import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useNavigate} from "react-router-dom";
import {EDIT_COMPANY_ROUTE} from "../../utils/consts";





function CompanyList(){
    const navigate = useNavigate();

    async function deleteCompany(id){
        let res = await fetch("https://localhost:44332/api/Company/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
    }

    const editCompany = (id)=>{
        localStorage.setItem("id",id);

        navigate({
            pathname : EDIT_COMPANY_ROUTE
        })

    }



    function callTwoFunctions(id){
        deleteCompany(id);
        getCompanies();
    }


    async function getCompanies(){

        let res = await fetch("https://localhost:44332/api/Company", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        res = await res.json();
        localStorage.setItem("comp", JSON.stringify(res));

    }
    //debugger;
    getCompanies();


    return (
        <div className="animated fadeIn">

            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Companies List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Check</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Account</th>
                                    <th>Is confirmed</th>
                                    <th>Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    JSON.parse(localStorage.getItem("comp")).map((item,idx)=>{
                                        return <tr key={idx}>
                                            <td>{item.company_id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.company_check}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.company_account}</td>
                                            <td>{item.is_confirmed}</td>
                                            <td>{item.adress}</td>
                                            <td>
                                                <row>
                                                    <button className="btn btn-warning" onClick={()=>editCompany(item.company_id)}>Edit</button>
                                                </row>
                                                <row>
                                                    -
                                                </row>
                                                <row>
                                                    <button className="btn btn-warning" onClick={()=>callTwoFunctions(item.company_id)}>Delete</button>
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
export default CompanyList;


