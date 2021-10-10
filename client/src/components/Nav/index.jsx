import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import img from "../../img/cookdarkgreen.svg"
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Dispatch/actions";


export default function Nav(){
    const search = useSelector(state => state.search)
    const dispatch = useDispatch();

    async function handleChange(e){
      dispatch(await setSearch(e.target.value))
    }
  
    
    return(
        <header className={styles.navbar} id="Nav">
            
            {/* <div className={styles.container}> */}
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
                    <form className="form-container">
                    <input
                    type="text"
                    id="title"
                    placeholder="Search Recipe"
                    autoComplete="off"
                    value={search}
                    onChange={(e) => handleChange(e)}
                    />
                    </form>
                
                </div>
                <NavLink to={`/search/${search}`}>buscar</NavLink>
            {/* </div> */}
        </header>
    )
}