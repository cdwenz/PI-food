import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import img from "../../img/cookdarkgreen.svg"
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Dispatch/actions";
import {FcSearch} from "react-icons/fc"

export default function Nav(){
    const search = useSelector(state => state.search)
    const dispatch = useDispatch();

    async function handleChange(e){
        dispatch(await setSearch(e.target.value))
    }
    function pressEnter(e){
        if(e.charCode === 13){
            if(search === "") alert('you must enter a recipe');
            else window.location.href = `/search/${search}`;
        }
    }
  
    
    return(
        <header className={styles.navbar} id="Nav">
            
                    <div><img className={styles.img} src={img} alt="" /></div>
            
                <div className={styles.div}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink exact to="/home">Home</NavLink>
                            <NavLink exact to="/RecipeCreate">Create Recipe</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.searchMobile}>
                    <div >
                        <input
                        type="text"
                        id="title"
                        placeholder="Search Recipe"
                        autoComplete="off"
                        value={search}
                        className={styles.inputSearch}
                        onChange={(e) => handleChange(e)}
                        onKeyPress={(e) => pressEnter(e)}
                        />
                    </div>
                
                <NavLink to={`/search/${search}`} style={{color: 'white', textDecoration: 'none', paddingBottom:'5px'}}>Search<FcSearch/></NavLink>
                </div>
            
        </header>
    )
}