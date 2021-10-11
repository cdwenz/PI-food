import styles from './card.module.css'
import img from '../../img/cociner.png'
import DietsIcons from '../DietsIcons'

export default function Card({recipe}){
    return(
        <div className={styles.divPrincipal}>
            
            <span>{recipe.name.slice(0,30)}</span>

            <img className={styles.imgCard} src={recipe.image?recipe.image:img} alt=""/>

           <DietsIcons arrayDiets={recipe.diets} card={true}/> 
            {/* <p className={styles.diets}>{recipe.diets}</p> */}
       
        </div>
    )
}