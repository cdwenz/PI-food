import styles from './card.module.css'
import img from '../../img/cociner.png'
import DietsIcons from '../DietsIcons'

export default function Card({recipe}){
    
    let [nameA, nameB] = recipe.name.split(' ')
    console.log(recipe.diets)
    return(
        
            <div className={styles.grid}>
					<figure className={styles.effectLexi}>
						<img src={recipe.image?recipe.image:img} alt=""/>
						<figcaption>
							<h3>{nameA} <span>{nameB}</span></h3>
							<p>{recipe.diets.join(' ')}</p>
						</figcaption>			
					</figure>
				</div>
        // <div className={styles.divPrincipal} key={recipe.id}>
            
        //     <span>{recipe.name.slice(0,30)}</span>

        //     <img className={styles.imgCard} src={recipe.image?recipe.image:img} alt=""/>

        //    <DietsIcons arrayDiets={recipe.diets} card={true} id={recipe.id}/> 
        // </div>
    )
}