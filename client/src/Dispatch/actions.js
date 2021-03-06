
import axios from "axios"
import { GET_ALL_RECIPES, GET_DIETS, GET_ERROR, GET_RECIPE_QUERY, ORDER, ORDER_DIET, ORDER_SCORE, SET_PAGE, SET_SEARCH } from "./Types"


export function getAllRecipes(){
    return function(dispatch){
        return axios.get(`/recipes`)
            .then(response => response.data)
            .then(json => {
                dispatch({type: GET_ALL_RECIPES, payload: json})
            })
            .catch(err =>{
                dispatch({type: GET_ERROR, payload: err})
            })
    }
}

export function getRecipeQuery(name){
    return function(dispatch){
        return axios.get(`/recipes?name=${name}`)
            .then(response => response.data)
            .then(json => {
                dispatch({type: GET_RECIPE_QUERY, payload: json})
            })
            .catch(err =>{
                dispatch({type: GET_ERROR, payload: err})
            } )
    }
}

export function getDiets(){
    return async function(dispatch){
        let json = await(await axios.get(`/types`)).data;
        return dispatch({type: GET_DIETS, payload: json})
    }
}

export async function postRecipe(list){
   try{
        await axios.post(`/recipes`, list);
        return true;
   }catch({message: error}){
        return false;
   }
    
}

export function setPage(payload){
    return{
        type: SET_PAGE,
        payload}
}

export function setSearch(payload){
    return{
        type: SET_SEARCH,
        payload}
}

export function order(payload){
    return{
        type: ORDER,
        payload
    }       
}
export function orderScore(payload){
    return{
        type: ORDER_SCORE,
        payload
    }       
}
export function orderByDiet(payload){
    return{
        type: ORDER_DIET,
        payload
    }       
}
