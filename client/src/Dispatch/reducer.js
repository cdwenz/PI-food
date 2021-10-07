import { GET_ALL_RECIPES, GET_RECIPE_QUERY, SET_PAGE } from "./Types"

const initialState = {
    recipes: "",
    recipesByQuery: "",
    page: 1,
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
                recipesByQuery: payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        default:
            return state
    }
}