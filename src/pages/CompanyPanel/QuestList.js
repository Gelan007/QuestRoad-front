import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useNavigate} from "react-router-dom";
import YellowButton from "../../components/UI/button/YellowButton";
import {EDIT_QUEST_ROUTE} from "../../utils/consts";





function QuestList(){
    const navigate = useNavigate();

    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [difficulty_level, setDifficulty_level] = useState(" ");
    const [city, setCity] = useState(" ");
    const [adress, setAdress] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [actors, setActors] = useState(" ");
    const [company_id, setCompany_id] = useState(0);
    const [max_count_users, setMax_count_users] = useState(0);
    const [price, setPice] = useState(" ");


    const editQuest = (id)=>{
        localStorage.setItem("CompQuestId",id);

        navigate({
            pathname : EDIT_QUEST_ROUTE
        })

    }



    function callTwoFunctions(company_id, quest_id){
        getQuests();
    }


    async function getQuests(){

        let res = await fetch("https://localhost:44332/api/Quest/Comp", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
        });
        console.log(res);
        res = await res.json();
        localStorage.setItem("CompQues", JSON.stringify(res));

        console.log(localStorage.getItem("CompQues"));

        // if(res != null){
        //     localStorage.setItem("CompQues", JSON.stringify(res));
        // }
        // else{
        //     localStorage.setItem("CompQues", JSON.stringify(name, description, difficulty_level, city, adress, category, actors, company_id, max_count_users, price));
        // }
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
                                    JSON.parse(localStorage.getItem("CompQues")).map((item,idx)=>{
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
                                                        <YellowButton style={{width: "80px"}}
                                                                onClick={() => editQuest(item.quest_id)}>Edit
                                                        </YellowButton>
                                                    </row>
                                                    <row>
                                                        -
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


