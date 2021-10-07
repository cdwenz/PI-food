import styles from './card.module.css'

function keyRandom(value){
    return Math.round(Math.random*value*10)
}

export default function Card({recipe, page}){
    return(
        <div className={styles.divPrincipal}>
        <span>{recipe.name}</span>
        <img className={styles.imgCard} src={recipe.image} alt=""/>
        
        <span>{recipe.diets}</span>
        {/* {
            recipe.diets.map((rec, index) => {
                 return <span key={index} className={styles.temp}>{rec} | </span>
                })
        } */}
        
        </div>
    )
}