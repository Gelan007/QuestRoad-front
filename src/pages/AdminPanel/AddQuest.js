import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {QUEST_LIST_ROUTE} from "../../utils/consts";
import YellowInput from "../../components/UI/input/YellowInput";
import YellowButton from "../../components/UI/button/YellowButton";


function AddQuest(){

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


    // let convertedBoolValue;
    // if(isComfirmed == "false"){
    //     console.log("FALSEEEEEEEEEEE");
    //     convertedBoolValue = false;
    // }
    // else if(isComfirmed == "true"){
    //     console.log("TRUEEEEEEEEEEE");
    //     convertedBoolValue = true;
    // }



    async function createQuest(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:44332/api/Quest", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Name:name,Description:description, Difficulty_level:difficulty_level, City:city, Adress:adress, Category:category, Actors:actors, Company_id:company_id, Max_count_users:max_count_users, Price:price}),
        });
        if(res.status===200){
            navigate(QUEST_LIST_ROUTE);
        }
    }




    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={createQuest}>
                                    <h1>Add New</h1>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="description" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="difficulty_level" placeholder="Difficulty_level" onChange={(e)=>setDifficulty_level(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="city" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="address" placeholder="Address" onChange={(e)=>setAdress(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="category" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="actors" placeholder="Actors" onChange={(e)=>setActors(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="company_id" placeholder="Company_id" onChange={(e)=>setCompany_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "25px"}} type="text" name="max_count_users" placeholder="Max_count_users" onChange={(e)=>setMax_count_users(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <YellowInput style={{background:"#E3E3E3", color:"black", marginBottom: "50px"}} type="text" name="price" placeholder="Price" onChange={(e)=>setPice(e.target.value)}/>
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
export default AddQuest;
