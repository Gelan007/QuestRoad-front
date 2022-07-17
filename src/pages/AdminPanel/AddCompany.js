import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {COMPANY_LIST_ROUTE} from "../../utils/consts";
import YellowInput from "../../components/UI/input/YellowInput";
import YellowButton from "../../components/UI/button/YellowButton";


function AddCompany(){

    const [name, setName] = useState("");
    const [check, setCheck] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [account, setAccount] = useState("");
    const [isComfirmed, setIsConfirmed] = useState("false");
    const [isComfirmedBool, setIsConfirmedBool] = useState({isComfirmed});
    const [adress, setAdress] = useState("");
    const navigate = useNavigate();
    let convertedBoolValue;
    if(isComfirmed == "false"){
        convertedBoolValue = false;
    }
    else if(isComfirmed == "true"){
        convertedBoolValue = true;
    }



    async function createCompany(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:44332/api/Company", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("token"),
            },
            body: JSON.stringify({Name:name,Company_check:check, Email:email, Phone:phone,Company_account:account, Is_confirmed:convertedBoolValue, Adress:adress}),
        });
        if(res.status===200){
            navigate(COMPANY_LIST_ROUTE);
        }
        setIsConfirmedBool({isComfirmed});
    }




    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={createCompany}>
                                    <h1>Add New</h1>
                                    <InputGroup className="mb-3">
                                        Назва
                                        <YellowInput  style={{ marginBottom: "20px"}} type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Чек
                                        <YellowInput style={{marginBottom: "20px"}} type="text" name="company_check" placeholder="Check" onChange={(e)=>setCheck(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Email
                                        <YellowInput style={{marginBottom: "20px"}} type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Номер телефону
                                        <YellowInput style={{  marginBottom: "20px"}} type="text" name="phone" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Акаунт
                                        <YellowInput style={{marginBottom: "20px"}} type="text" name="company_account" placeholder="Account" onChange={(e)=>setAccount(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Чи підтверджена
                                        <YellowInput style={{marginBottom: "20px"}} type="text" name="is_confirmed" placeholder="Confirmed" onChange={(e)=>setIsConfirmed(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Адреса
                                        <YellowInput style={{ marginBottom: "50px"}} type="text" name="adress" placeholder="Address" onChange={(e)=>setAdress(e.target.value)}/>
                                    </InputGroup>


                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <YellowButton  style={{marginBottom: "20px"}} type="submit" block>Save</YellowButton>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <YellowButton  type="reset" block>Cancel</YellowButton>
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
export default AddCompany;
