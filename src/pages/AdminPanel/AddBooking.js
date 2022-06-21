import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {BOOKING_LIST_ROUTE} from "../../utils/consts";


function AddBooking(){
    const [quest_id, setQuest_id] = useState(0);
    const [team_id, setTeam_id] = useState(0);
    const [price, setPrice] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();



    async function createBooking(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:44332/api/Booking", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Quest_id:quest_id,Team_id:team_id, Price:price, Time:time,Description:description}),
        });
        if(res.status===200){
            navigate(BOOKING_LIST_ROUTE);
        }
    }




    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={createBooking}>
                                    <h1>Add New</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="quest_id" placeholder="quest_id" onChange={(e)=>setQuest_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="team_id" placeholder="team_id" onChange={(e)=>setTeam_id(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="price" placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="time" placeholder="time" onChange={(e)=>setTime(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
                                    </InputGroup>


                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button  type="reset" className="btn btn-info mb-1" block><span>Cancel</span></Button>
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
export default AddBooking;
