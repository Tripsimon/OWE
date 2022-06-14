//Importy
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";
import { store } from "../app/store";
import Post from "../fragments/Post";
import instance from "../services/AxiosConf";

//Vlastní CSS pro X 
const StyledSection = styled.section`    
    & > a{
        color: rgb(0,200,0);
        font-size: 2rem;
        text-decoration: none;
    }
`
//Získání bologů
const getPosts = () => instance.get('/posts')

const Blog = () => {

    //Stav přihlášení
    const [loged, setLoged] = useState(store.getState().loged.user);

    const {isLoading, data, refetch} = useQuery('posts', getPosts)             

    //Uživatel
    const isLoged = () => Object.keys(getUser()) != 0;    
    const getUser = () => store.getState().loged.user;        

    useEffect(() => {  
        //Nastavení přihlíšení    
        setLoged(isLoged())        
        
        //Odhlášení store
        const unSubscribe = store.subscribe(() => {                                            
            setLoged(isLoged())                  
        })
        return () => unSubscribe();    
    }, [loged])

    //Obrazovka načítání
    if(isLoading){
        return <LoadingPage/>
    }        

    //Komponenta
    return(    
        <StyledSection>         
            <Link to='/addPost'>+</Link>            
            <div>
                {data.data && data.data.map(x => <Post key={x._id} data={x} refetch={refetch}></Post>)}
            </div>      
        </StyledSection>        
    )
}

//Export
export default Blog;