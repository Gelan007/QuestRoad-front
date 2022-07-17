import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import YellowInput from "../../components/UI/input/YellowInput";
import YellowButton from "../../components/UI/button/YellowButton";
import {COMPANY_LIST_ROUTE} from "../../utils/consts";

function EditCompany(){

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [code, setCode] = useState("");
    // const [taxes, setTaxes] = useState("");
    // const [address, setAddress] = useState("");
    // const [founder, setFounder] = useState("");
    // const [account, setAccount] = useState("");


    const [name, setName] = useState("");
    const [check, setCheck] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [account, setAccount] = useState("");
    const [isComfirmed, setIsConfirmed] = useState("false");
    const [adress, setAdress] = useState("");
    const navigate = useNavigate();

    let convertedBoolValue;
    if(isComfirmed == "false"){
        convertedBoolValue = false;
    }
    else if(isComfirmed == "true"){
        convertedBoolValue = true;
    }


    async function editCompany(e){
        try {
            e.preventDefault();
            let res = await fetch("https://localhost:44332/api/Company/" + localStorage.getItem("id"), {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("token"),
                },
                body: JSON.stringify({Name:name,Company_check:check, Email:email, Phone:phone,Company_account:account, Is_confirmed:convertedBoolValue, Adress:adress}),
            });
            navigate(COMPANY_LIST_ROUTE)
            //debugger;
        } catch {
            alert("Something went wrong")
        }

    }





    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("comp")).length; i++ ){
        if(JSON.parse(localStorage.getItem("comp"))[i].company_id == localStorage.getItem("id")){
            result.push(JSON.parse(localStorage.getItem("comp"))[i]);
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
                                <Form onSubmit={editCompany}>
                                    <h1>Update Company</h1>
                                    <InputGroup className="mb-3">
                                        Назва
                                        <YellowInput style={{ marginBottom: "20px"}} type="text" name="name" placeholder={result[0].name}  onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Чек
                                        <YellowInput style={{  marginBottom: "20px"}} type="text" name="company_check" placeholder={result[0].company_check} onChange={(e)=>setCheck(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Email
                                        <YellowInput style={{ marginBottom: "20px"}} type="email" name="email" placeholder={result[0].email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Телефон
                                        <YellowInput style={{ marginBottom: "20px"}} type="text" name="phone" placeholder={result[0].phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Акаунт
                                        <YellowInput style={{marginBottom: "20px"}} type="text" name="company_account" placeholder={result[0].company_account} onChange={(e)=>setAccount(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Чи підтверджена
                                        <YellowInput style={{ marginBottom: "20px"}} type="text" name="is_confirmed" placeholder={result[0].is_confirmed} onChange={(e)=>setIsConfirmed(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        Адреса
                                        <YellowInput style={{  marginBottom: "20px"}} type="text" name="adress" placeholder={result[0].adress} onChange={(e)=>setAdress(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <YellowButton style={{marginBottom: "20px"}} type="submit" block>Save</YellowButton>
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
export default EditCompany;
