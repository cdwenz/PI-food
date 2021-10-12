import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, postRecipe } from "../../Dispatch/actions";
import styles from './recipeCreate.module.css'

function validate(input){
    let error = {};
    if(!input.name) error.name = "Title is required";
    if(!input.summary) error.summary = "Summary is required";
    if(input.score > 100 || input.score < 0) error.score = "score are must 0-100";
    if(input.health > 100 || input.health < 0) error.health = "health are must 0-100";
    
    return error;
}

export default function RecipeCreate(){
    const diets = useSelector(state => state.diets)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({name:"initial"});
    const object = {
        name: "",
        summary: "",
        score:"",
        health: "",
        step: "",
        dietName: []
    }
    const [list, setList] = useState(object);

   function handleChange(e){
    e.target.type === 'checkbox'
    ?
        (e.target.checked === true 
        ? 
        setList({
            ...list,
            dietName: [...list.dietName, e.target.id]
        })
        :
        setList({
            ...list,
            dietName: list.dietName.filter(diet => diet !== e.target.id)
        }))
        
    :   setList({
            ...list,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...list,
            [e.target.name]: e.target.value
        }))
    }
   async function handleSubmit(e){
       e.preventDefault();
       const flag = await postRecipe(list);
       dispatch(getAllRecipes());
       setList(object);
       cleanChecks();
       flag === true 
       ? 
       alert('Recipe load fullfiled') 
       : 
       alert('hubo un error en la carga');
       
       window.location.href = "/home"
   }
   function cleanChecks(){
       diets.forEach((diet)=>{
            if(document.getElementById(diet).checked === true ){
                document.getElementById(diet).checked = false
            }
       })
   }
    return (
    <div className={styles.container}>
            <h1>Recipe Create</h1>
        <div className={styles.divCreate}>
            <div className={styles.divform}>
                <form className={styles.form} onChange={(e)=>handleChange(e)} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Title"
                        className={errors.name && styles.error} value={list.name}/>
                    <input type="text" name="summary" placeholder="Summary"
                        className={errors.summary && styles.error} value={list.summary}/>
                    <input type="number" name="score" placeholder="Score (0-100)" className={errors.score && styles.error} value={list.score}/>
                    
                    <input type="number" name="health" placeholder="Health Score (0-100)" className={errors.health && styles.error} value={list.health}/>
                    <label>Steps</label>
                    <textarea rows = "8"  name = "step" placeholder ="Enter Steps here..." value={list.step} />
                    <button type="submit" className={styles.btnCreate} disabled={errors.name || errors.summary || errors.score || errors.health ? true : false} >Create</button>
                </form>
                    
            </div>
            <div ><ul className={styles.diets}>
                <form onChange={(e)=>handleChange(e)}>
                        {
                            diets.length > 0
                        ?
                        diets.map((e,index) => {
                                return <div>
                                    <input type="checkbox" className="checks" id={e} />
                                    <label htmlFor={e} >{e}</label>
                                </div> 
                            })
                            :
                            <h3>diets</h3>
                        }
                        </form>
                    </ul>
            </div>
        </div>
    </div>
    )
}