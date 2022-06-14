//Importy
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { sendPost } from "../services/UserService";
import {h2, Form, Button, Container} from "react-bootstrap";


//Komponenta
const AddPost = () => {

    //Stavy
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');          
       
    const navigate = useNavigate()
    
    //Obsloužení publikování postu
    const addPost = async () =>{
        if( title && content){
            let isSended = await sendPost(title, content)

            if(isSended)
                navigate('/blog', {replace: false})                
            else
                toast.warning("Somethink went wrong")            
        }
        else{
            alert("You have to fill up the inputs !")
        }       
    }    

    //Změna obsahu formuláře
    const changedContent = (text) => {
        setContent(text)
    }


    //Obsah komponenty
    return(
        <Form className="mt-3">
            <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulek / Nadpis</Form.Label>
                    <Form.Control type="text" value={title} onChange={ (e) => setTitle(e.target.value) } placeholder="Title" name="utitle" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Obsah</Form.Label>
                    <Form.Control as="textarea"  type="text" value={content} onInput={ (e) => changedContent(e.target.value) } placeholder="Content" name="content" required/>
                </Form.Group>
                <Button onClick={addPost} variant="primary" type="submit"> Publikovat </Button>
            </Container>
        </Form>
    )    
}

//Export
export default AddPost;