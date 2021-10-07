import axios from 'axios';
import { useEffect, useState } from 'react';
// import style from './detail.module.css'

export default function Detail(props){
    const id = props.match.params.id;
    const [rec, setRec] = useState('')
    
    useEffect(()=>{
        async function getRecipeById(id){
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            setRec(response.data)
        } 
        getRecipeById(id);
    },[])

    console.log(rec);
    return (
        <div>
              <h1>{rec.name}</h1>
              <span><img src={rec.image} alt=""/></span>
              <span>{rec.summary}</span>
        </div>
    )
}