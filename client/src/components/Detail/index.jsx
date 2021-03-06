import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './detail.module.css'
import img from '../../img/cociner.png'
import DietsIcons from '../DietsIcons';
import DishTypes from '../DishTypes';
import {IoCloseCircleOutline} from 'react-icons/io5';

export default function Detail(props){
    const id = props.match.params.id;

    const [rec, setRec] = useState('')
    
    useEffect(()=>{
        async function getRecipeById(id){
            const response = await axios.get(`/recipes/${id}`)
            setRec(response.data)
        } 
        getRecipeById(id);
    },[id])

    function onClose(){
        props.history.goBack()
    }
    return (
        <div className={styles.detail}>
           <div >
               <div className={styles.types}>
                   <div>
                        <h1 className={styles.name}>{rec.name}</h1>
                   </div>
                   {/* <div > */}
                        <button className={styles.btnClose} onClick={onClose}><IoCloseCircleOutline className={styles.iconCLose}/></button>
                   {/* </div> */}
               </div>
               <div className={styles.primary}>
                    <div>
                        <span><img className={styles.img} src={rec.image?rec.image:img} alt=""/></span>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.types}>
                            <div className={styles.dietpad}>
                                <h3>Diets Types</h3>
                                <DietsIcons arrayDiets={rec.diets}/>
                                
                            </div>
                                {
                                    rec.dishTypes
                                    ?
                                    <div>
                                        <h3>Dish Types</h3>
                                        <DishTypes arrayDish={rec.dishTypes} /> 
                                    </div>
                                    :
                                    null
                                }
                        </div>
                        <div className={styles.types}>
                            <div className={styles.dietpad}>
                                <h3>Score</h3>
                                <ul><li>{rec.score}</li></ul>
                            </div>
                            <div>
                                <h3>Health Score</h3>
                                <ul><li>{rec.health}</li></ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.summary}>
                        <h2>Summary:</h2>
                        <p dangerouslySetInnerHTML={{ __html: rec.summary }} />
                        
                    </div>
                <div>
                    <div className={styles.steps}>
                        <h2>Steps:</h2>
                        <ul>
                        {
                        Array.isArray(rec.steps) && rec.steps.length > 0
                        ?
                            rec.steps.map((e,index)=>{
                            return<li key={index}>{e}</li>
                            })
                        :
                            <span>Without Description</span>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}