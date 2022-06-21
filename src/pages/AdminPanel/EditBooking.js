import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";

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
        e.preventDefault();
        let res = await fetch("https://localhost:44332/api/Booking/" + localStorage.getItem("id"), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Quest_id:quest_id,Team_id:team_id, Price:price, Time:time,Description:description}),
        });
        //debugger;
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
                                        <Input type="text" name="quest_id" placeholder={result[0].quest_id} onChange={(e)=>setQuest_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="team_id" placeholder={result[0].team_id} onChange={(e)=>setTeam_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="price" placeholder={result[0].price} onChange={(e)=>setPrice(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="time" placeholder={result[0].time} onChange={(e)=>setTime(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="description" placeholder={result[0].description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button type="reset" className="btn btn-info mb-1" block><span>Cancel</span></Button>
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
