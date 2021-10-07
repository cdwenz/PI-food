import axios from "axios";
import { useEffect, useState } from "react"
import { postRecipe } from "../../Dispatch/actions";
import styles from './recipeCreate.module.css'

export default function RecipeCreate(){
   
    const [diets, setDiets] = useState("");
    const [list, setList] = useState({
        name: "",
        summary: "",
        score:"",
        health: "",
        step: "",
        dietName: []
    });
    useEffect(()=>{
        async function getTypes(){
            const response = await axios.get(`http://localhost:3001/types`)
            setDiets(response.data)
        } 
        getTypes()
    },[])

   function handleChange(e){
    e.target.type === 'checkbox'
    ?
        (e.target.checked === true 
        ? 
        setList({
            ...list,
            dietName: [...list.dietName, e.target.value]
        })
        :
        setList({
            ...list,
            dietName: list.dietName.filter(diet => diet !== e.target.value)
        }))
        
    :   setList({
            ...list,
            [e.target.name]: e.target.value
        })
        console.log(list.dietName)
   }
   async function handleSubmit(e){
       e.preventDefault();
       console.log(list)
       const flag = await postRecipe(list)
       flag === true ? alert('Recipe load fullfiled') : alert('hubo un error en la carga')
   }

//    function lblChecked(e, index){
//        let flag = document.getElementById(index+'chk').checked
//         document.getElementById(index+'chk').checked = !flag;
//         document.getElementById(index+'chk').checked === true 
//         ? 
//         setList({
//             ...list,
//             dietName: [...list.dietName, e.target.value]
//         })
//         :
//         setList({
//             ...list,
//             dietName: list.dietName.filter(diet => diet !== e.target.value)
//         })
//         console.log(list.dietName)
//         return <div key={index} className={styles.switchContainer}>
//                                     <input type="checkbox" id={index + 'chk'} className={styles.switch} value={e}/>
//                                 <label htmlFor="switch" value={index + 'lbl'} className={styles.lbl} onClick={(e) => lblChecked(e, index)}></label>
//                                 {e}</div> 
//    }

    return (
        <div >
            <h1>Recipe Create</h1>
            <div className={styles.divform}>
                <form className={styles.form} onChange={(e)=>handleChange(e)} onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="name"></input>
                    <label>Summary</label>
                    <input type="text" name="summary"></input>
                    <label>Score</label>
                    <input type="number" name="score"></input>
                    <label>Health Score</label>
                    <input type="number" name="health" placeholder="0-100"></input>
                    <label>Steps</label>
                    <textarea rows = "5" cols = "60" name = "step" placeholder ="Enter Steps here..."/>
                    <ul>
                        {
                        diets.length > 0
                        ?
                            diets.map((e,index) => {
                                return <div key={index} className={styles.switchContainer}>
                                    <input type="checkbox" id={e}/>
                                <label htmlFor={e} >{e}</label>
                                </div> 
                            })
                        :
                            <h3>diets</h3>
                        }
                    </ul>
                   
                    <button type="submit">Create</button>
                </form>
               
            </div>
        </div>
    )
}