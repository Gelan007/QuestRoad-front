import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useNavigate} from "react-router-dom";
import {EDIT_QUEST_ROUTE} from "../../utils/consts";
import YellowButton from "../../components/UI/button/YellowButton";





function QuestList(){
    const navigate = useNavigate();

    async function deleteQuest(id){
        let res = await fetch("https://localhost:44332/api/Quest/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
    }

    const editQuest = (id)=>{
        localStorage.setItem("QuestId",id);

        navigate({
            pathname : EDIT_QUEST_ROUTE
        })

    }



    function callTwoFunctions(id){
        deleteQuest(id);
        getQuests();
    }


    async function getQuests(){

        let res = await fetch("https://localhost:44332/api/Quest", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
        res = await res.json();
        localStorage.setItem("ques", JSON.stringify(res));
        console.log(localStorage.getItem("ques"));
    }
    //debugger;
    getQuests();


    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Quests List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Difficulty_level</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Category</th>
                                    <th>Actors</th>
                                    <th>Company id</th>
                                    <th>Max count of users</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    JSON.parse(localStorage.getItem("ques")).map((item,idx)=>{
                                        return <tr key={idx}>
                                            <td>{item.quest_id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.difficulty_level}</td>
                                            <td>{item.city}</td>
                                            <td>{item.adress}</td>
                                            <td>{item.category}</td>
                                            <td>{item.actors}</td>
                                            <td>{item.company_id}</td>
                                            <td>{item.max_count_users}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <row>
                                                    <YellowButton  style={{width: "80px"}} onClick={()=>editQuest(item.quest_id)}>Edit</YellowButton>
                                                </row>
                                                <row>
                                                    -
                                                </row>
                                                <row>
                                                    <YellowButton style={{width: "80px"}} onClick={()=>callTwoFunctions(item.quest_id)}>Delete</YellowButton>
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
export default QuestList;


