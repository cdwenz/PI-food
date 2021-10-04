import './card.module.css'

export default function Card({recipe, page}){
    return(
        <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt=""/>
        {recipe.diets.map(recipe => <span>{recipe} | </span>)}
        </div>
    )
}