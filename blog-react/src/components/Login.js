//Importy
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { login } from '../services/UserService'
import { login as _login } from "../features/auth/authSlice"
import { toast } from 'react-toastify';
import {Form,Button, Container} from "react-bootstrap"

//Komponenta
const Login = () => {
    //Stavy
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()
    const navigate = useNavigate();    
    
    //Obsloužení přihlášení
    const LoginClick = async () =>{
        let sucess = await login(name, password)         
                
        if(!sucess){
            toast("Bad login", 'warning')

            return;
        }                                   

        navigate('/blog', {replace: false})
    }   

    //Komponenta
    return (
        <Container>
            <h2>Přihlášení</h2> 
            <Form>     

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Jméno</Form.Label>
                    <Form.Control type="text" value={name} onChange={ (e) => setName(e.target.value) } placeholder="Username" name="uname" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Heslo</Form.Label>
                    <Form.Control type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" name="psw" required/>
                    <Form.Text className="text-muted">
                        Nikdy nesdílejte své heslo !
                    </Form.Text>
                </Form.Group>

                <p>Ještě nemáte účet ? <Link to='/register'><b>Registrovat</b></Link></p>
                <Button variant="primary" type="submit" onClick={LoginClick}>Login</Button>
        </Form>
        </Container>   
    )    
}

//Export
export default Login;