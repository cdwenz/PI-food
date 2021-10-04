
import { GET_ALL_RECIPES, GET_RECIPE_QUERY } from "./Types"

export function getAllRecipes(){
    return function(dispatch){
        return fetch(`http://localhost:3001/recipes`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_ALL_RECIPES, payload: json})
            })
    }
}
export function getRecipeQuery(name){
    return function(dispatch){
        return fetch(`http://localhost:3001/recipes?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_RECIPE_QUERY, payload: json})
            })
    }
}