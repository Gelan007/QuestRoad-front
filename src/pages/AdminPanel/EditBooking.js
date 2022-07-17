import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import YellowInput from "../../components/UI/input/YellowInput";
import YellowButton from "../../components/UI/button/YellowButton";
import {BOOKING_LIST_ROUTE} from "../../utils/consts";

function EditBooking(){

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [code, setCode] = useState("");
    // const [taxes, setTaxes] = useState("");
    // const [address, setAddress] = useState("");
    // const [founder, setFounder] = useState("");
    // const [account, setAccount] = useState("");


    const [quest_id, setQuest_id] = useState(0);
    const [team_id, setTeam_id] = useState(0);
    const [price, setPrice] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();



    async function editBooking(e){
        try {
            e.preventDefault();
            let res = await fetch("https://localhost:44332/api/Booking/" + localStorage.getItem("BookingId"), {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("token"),
                },
                body: JSON.stringify({quest_id:quest_id,team_id:team_id, price:price, time:time,description:description}),
            });
            navigate(BOOKING_LIST_ROUTE);
        } catch {
            alert("Something went wrong");
        }

    }

    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("book")).length; i++ ){
        if(JSON.parse(localStorage.getItem("book"))[i].booking_id == localStorage.getItem("BookingId")){
            result.push(JSON.parse(localStorage.getItem("book"))[i]);
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
                                <Form onSubmit={editBooking}>
                                    <h1>Update Booking</h1>
                                    <InputGroup className="mb-3">
                                        Айді квесту
                                        <YellowInput  style={{ marginBottom: "20px"}} type="text" name="quest_id" placeholder={result[0].quest_id} onChange={(e)=>setQuest_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Айді команди
                                        <YellowInput style={{  marginBottom: "20px"}} type="text" name="team_id" placeholder={result[0].team_id} onChange={(e)=>setTeam_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Ціна
                                        <YellowInput style={{marginBottom: "20px"}} type="text" name="price" placeholder={result[0].price} onChange={(e)=>setPrice(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Час
                                        <YellowInput style={{ marginBottom: "20px"}} type="text" name="time" placeholder={result[0].time} onChange={(e)=>setTime(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Опис
                                        <YellowInput style={{ marginBottom: "50px"}} type="text" name="description" placeholder={result[0].description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <YellowButton style={{marginBottom: "20px"}} type="submit" block>Save</YellowButton>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <YellowButton type="reset"block>Cancel</YellowButton>
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
export default EditBooking;
