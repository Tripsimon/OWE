//Importy
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Post from "../fragments/Post";
import LoadingPage from "./LoadingPage";
import { store } from "../app/store";
import instance from "../services/AxiosConf";

//Získání postů
const getPosts = (name) => instance.get(`/posts/${name}`)
    
const Posts = () => {

    //Stavy a proměné
    const isLoged = () => Object.keys(getUser()) != 0;    
    const getUser = () => store.getState().loged.user;        
    const { name } = useParams();
    const [loged, setLoged] = useState(store.getState().loged.user);
    const {isLoading, isFetching, data, refetch} = useQuery('posts', () => getPosts(name))             

    //Obsloužení načtení stránky
    useEffect(() => {          
        setLoged(isLoged())        
        
        const unSubscribe = store.subscribe(() => {                                            
            setLoged(isLoged())                  
        })
        return () => unSubscribe();    
    }, [loged])
    
    //Loading page
    if(isLoading){
        return <LoadingPage/>
    }      

    //Komponenta
    return(
        <>
            <h1>Příspěvky od {name}</h1>
            <div>
                {data && data.data && data.data.map(x => <Post key={x._id} data={x} refetch={refetch}></Post>)}
            </div>  
        </>         
    )
}

//Export
export default Posts;