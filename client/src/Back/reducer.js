import { GET_ALL_RECIPES, GET_RECIPE_QUERY } from "./Types"



const initialState = {
    recipes: "",
    recipeDetail: "",
    diets: ""
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_RECIPES:
            return{
                ...state,
                recipes: payload
            }
        case GET_RECIPE_QUERY:
            return {
                ...state,
                recipes: payload
            }
        default:
            return state
    }
}