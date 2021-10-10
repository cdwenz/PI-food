import styles from './card.module.css'

export default function Card({recipe}){
    return(
        <div className={styles.divPrincipal}>
            
            <span>{recipe.name}</span>

            <img className={styles.imgCard} src={recipe.image} alt=""/>
            
            <p className={styles.diets}>{recipe.diets}</p>
       
        </div>
    )
}