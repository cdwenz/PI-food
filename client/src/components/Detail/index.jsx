import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './detail.module.css'

export default function Detail(props){
    const id = props.match.params.id;
    const [rec, setRec] = useState('')
    
    useEffect(()=>{
        async function getRecipeById(id){
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            setRec(response.data)
        } 
        getRecipeById(id);
    },[id])

    console.log(rec);
    return (
        <div className={styles.detail}>
           <div >
                        <h1>{rec.name}</h1>
               <div className={styles.nameSummary}>
                    <div>
                        <span><img className={styles.img} src={rec.image} alt=""/></span>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: rec.summary }} />
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                        {
                        Array.isArray(rec.steps)
                        ?
                            rec.steps.map(e=>{
                            return<li>{e}</li>
                            })
                        :
                            <h1>nada</h1>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}