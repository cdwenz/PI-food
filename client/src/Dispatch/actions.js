
import axios from "axios"
import { GET_ALL_RECIPES, GET_RECIPE_QUERY, SET_PAGE } from "./Types"

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

export function setPage(payload){
    return{
        type: SET_PAGE,
        payload}
}

export async function postRecipe(list){
   try{
        let response = await axios.post(`http://localhost:3001/recipes`, list);
        response = response.data;
        console.log('axios.post :', response);
        return true;
   }catch({message: error}){
        return false;
   }
    
}