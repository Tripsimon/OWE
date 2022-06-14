//Importy
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { store } from "../app/store"
import { logout } from "../features/auth/authSlice"
import {Button} from "react-bootstrap"

//Komponenta
const UserPage = () => {

    //Obsloužení načtení
    useEffect(() => {        
        const unSubscribe = store.subscribe(() => {                                                
            const _user = store.getState().loged.user;        

            setUser(_user);                
    
            if(!_user || Object.keys(_user) == 0) navigate("/login")                                     
        })
     
        return () => {
            unSubscribe();
        }
    })

    //Stavy
    const [user, setUser] = useState(store.getState().loged.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    
    //Vnitřek
    return (
        <>
            <h1>{"Příhlášen na účtu:  " +(user.name)}</h1>
            <Button onClick={() => dispatch(logout())}>Logout</Button>
        </>
    )
}

//Export
export default UserPage;
