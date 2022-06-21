import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useHistory, useNavigate} from "react-router-dom";
import {USER_LIST_ROUTE} from "../../utils/consts";

function EditUser(){

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState(0);
    const [company_id, setCompanyId] = useState(0);



    const navigate = useNavigate();



    async function editUser(e){
        e.preventDefault();
        let res = await fetch("https://localhost:44379/api/User/" + localStorage.getItem("UserId"), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Role: role, Company_id: company_id}),
        });
        //debugger;
        if(res.status==200){
            navigate(USER_LIST_ROUTE);
        }
        else{
            alert("Что-то пошло не так");
        }

    }







    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("use")).length; i++ ){
        if(JSON.parse(localStorage.getItem("use"))[i].user_id == localStorage.getItem("UserId")){
            result.push(JSON.parse(localStorage.getItem("use"))[i]);
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
                                <Form onSubmit={editUser}>
                                    <h1>Update User</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="email" placeholder={result[0].email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="phone" placeholder={result[0].phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="password" placeholder={result[0].password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="name" placeholder={result[0].name} onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="role" placeholder={result[0].role} onChange={(e)=>setRole(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="company_id" placeholder={result[0].company_id} onChange={(e)=>setCompanyId(e.target.value)}/>
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
export default EditUser;
