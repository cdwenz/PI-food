import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import img from "../../img/cook.svg"

export default function Nav(){
    return(
        <header>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.icon} ><img src={img} alt="" /></li>
                    <li>
                        <NavLink exact to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/RecipeCreate">Create Recipe</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}