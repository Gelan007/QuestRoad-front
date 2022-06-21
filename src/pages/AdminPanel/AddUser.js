import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {USER_LIST_ROUTE} from "../../utils/consts";


function AddUser(){

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [company_id, setCompanyId] = useState("");
    const navigate = useNavigate();



    async function createUser(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:44379/api/User", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Email:email, Phone: phone, Password: password, Name: name, Role: role, Company_id: company_id}),
        });
        if(res.status===200){
            navigate(USER_LIST_ROUTE);
        }
    }




    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={createUser}>
                                    <h1>Add New</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="phone" placeholder="phone" onChange={(e)=>setPhone(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="role" placeholder="role" onChange={(e)=>setRole(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="company_id" placeholder="company id" onChange={(e)=>setCompanyId(e.target.value)}/>
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
export default AddUser;
