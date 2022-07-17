import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {QUEST_LIST_ROUTE} from "../../utils/consts";
import YellowInput from "../../components/UI/input/YellowInput";
import YellowButton from "../../components/UI/button/YellowButton";

function EditQuest(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty_level, setDifficulty_level] = useState("");
    const [city, setCity] = useState("");
    const [adress, setAdress] = useState("");
    const [category, setCategory] = useState("");
    const [actors, setActors] = useState("");
    const [company_id, setCompany_id] = useState(0);
    const [max_count_users, setMax_count_users] = useState(0);
    const [price, setPice] = useState("");


    const navigate = useNavigate();



    async function editQuest(e){
        e.preventDefault();
        let res = await fetch("https://localhost:44332/api/Quest/" + localStorage.getItem("QuestId"), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Name:name,Description:description, Difficulty_level:difficulty_level, City:city, Adress:adress, Category:category, Actors:actors, Company_id:company_id, Max_count_users:max_count_users, Price:price}),
        });
        //debugger;
        if(res.status==200){
            navigate(QUEST_LIST_ROUTE);
        }
        else{
            alert("Что-то пошло не так");
        }

    }







    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("ques")).length; i++ ){
        if(JSON.parse(localStorage.getItem("ques"))[i].quest_id == localStorage.getItem("QuestId")){
            result.push(JSON.parse(localStorage.getItem("ques"))[i]);
        }
    }

    //setName(result[0].name);



    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={editQuest}>
                                    <h1>Update Quest</h1>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{marginBottom: "25px"}} type="text" name="name" placeholder={result[0].name} onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="description" placeholder={result[0].description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{marginBottom: "25px"}} type="text" name="difficulty_level" placeholder={result[0].difficulty_level} onChange={(e)=>setDifficulty_level(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="city" placeholder={result[0].city} onChange={(e)=>setCity(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="address" placeholder={result[0].adress} onChange={(e)=>setAdress(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="category" placeholder={result[0].category} onChange={(e)=>setCategory(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="actors" placeholder={result[0].actors} onChange={(e)=>setActors(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="company_id" placeholder={result[0].company_id} onChange={(e)=>setCompany_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="max_count_users" placeholder={result[0].max_count_users} onChange={(e)=>setMax_count_users(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{ marginBottom: "25px"}} type="text" name="price" placeholder={result[0].price} onChange={(e)=>setPice(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <YellowButton style={{marginBottom: "25px"}} type="submit" block>Save</YellowButton>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <YellowButton type="reset" block>Cancel</YellowButton>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default EditQuest;
