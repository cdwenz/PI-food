import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import img from "../../img/cookdarkgreen.svg"
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRecipeQuery } from "../../Dispatch/actions";


export default function Nav(){
    
    const dispatch = useDispatch();
    const state = useSelector(state => state.recipesByQuery)
    const [select, setSelect] = useState("");
    
    
    function handleChange(e){
      setSelect(e.target.value)
    }
  
    async function handleSubmit(e){
      e.preventDefault();
      if(select === "") alert('text required');
      else dispatch(await getRecipeQuery(select))
      setSelect("");
    }
  
    return(
        <header className={styles.navbar}>
                    <div><img className={styles.img} src={img} alt="" /></div>
            
                <div className={styles.div}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink exact to="/home">Home</NavLink>
                            <NavLink exact to="/RecipeCreate">Create Recipe</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                    <input
                    type="text"
                    id="title"
                    placeholder="Search Recipe"
                    autoComplete="off"
                    value={select}
                    onChange={(e) => handleChange(e)}
                    />
                {/* <NavLink to="/search"><span onClick={handleSubmit}>buscar</span></NavLink> */}
                    <button type="submit">SEARCH</button>
                    </form>
                
                </div>
        </header>
    )
}