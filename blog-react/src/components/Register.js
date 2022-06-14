//Importy
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { register } from '../services/UserService'
import { toast } from 'react-toastify'
import {Form,Button, Container} from "react-bootstrap"

//Komponenta
const Register = () => {
    //Stavy
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');    
    const navigate = useNavigate();

    //Obloužení registrace
    const registerClick = () =>{        

        if( name && password && password == confirmPassword ){            
            let isRegistered = register(name, password)
            
            if(isRegistered){
                toast.success("Registration was sucessfull")
                navigate('/login', {replace: false})
            }
            else{                
                toast.warning("Name is already somebody using!")
            }
        }
        else{
            alert("You must set your credentials correctly !")
        }       
    }    

    return(
        <Container>
            <h2>Registrace</h2> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Uživatelské jméno</Form.Label>
                    <Form.Control type="text" value={name} onChange={ (e) => setName(e.target.value) } placeholder="Username" name="uname" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Heslo</Form.Label>
                    <Form.Control type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" name="psw" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Potvrzení hesla</Form.Label>
                    <Form.Control type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } placeholder="Confirm Password" name="psw_conf" required/>
                </Form.Group>

                <Button onClick={registerClick}>Registrovat</Button>
                
                <p className="mt-2">Již máte účet ? <Link to='/Login'><b>Log in</b></Link></p>
            </Form>
        </Container>


    )    
}

//Export
export default Register;