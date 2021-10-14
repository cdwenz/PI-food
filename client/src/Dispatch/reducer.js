import { GET_ALL_RECIPES, GET_DIETS, GET_ERROR, GET_RECIPE_QUERY, ORDER, ORDER_DIET, ORDER_SCORE, SET_PAGE, SET_SEARCH } from "./Types"

const initialState = {
    serverDown: true,
    originRec: "",
    recipes: "",
    recipesByQuery: "",
    page: {
        recipes: 1,
        recipesByQuery: 1
    },
    search: "",
    diets: ""
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ERROR:
            return {
                ...state, 
                serverDown: true
            }
        case GET_ALL_RECIPES:
            return{
                ...state,
                originRec: payload,
                recipes: payload,
                serverDown: false
            }
        case GET_RECIPE_QUERY:
            return {
                ...state,
                recipesByQuery: payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: {...state.page, [payload.value]: payload.page}
            }
        case SET_SEARCH:
            return {
                ...state,
                search: payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: payload
            }
        case ORDER:
            if(payload.target === 'ASC'){
                return{
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: [...state[payload.value]].sort((a,b)=>{
                        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                    })
                }
            }else {
                return{
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: [...state[payload.value]].sort((a,b)=>{
                        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
                    })
                }
            }
        case ORDER_SCORE:
            if(payload.target === 'ALL'){
                return {
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]:state.originRec
                }
            }else if(payload.target === '0-25'){
                return {
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: state.originRec.filter(e=> e.score <= 25)
                }
            
            }else if(payload.target === '26-50'){
                return {
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: state.originRec.filter(e=> e.score > 25 && e.score <= 50)
                }
            
            }else if(payload.target === '50-75'){
                return {
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: state.originRec.filter(e=> e.score > 50 && e.score <= 75)
                }
            }else {
                return {
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: state.originRec.filter(e=> e.score > 75)
                }
            }
        case ORDER_DIET:
            if(payload.target === 'ALL'){
                return{
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]: state.originRec
                }
            }else {
                return{
                    ...state,
                    page: {
                        recipes: 1,
                        recipesByQuery: 1
                    },
                    [payload.value]:  state[payload.value].filter(e=> e.diets?.includes(payload.target))
                }
            }
        default:
            return state
    }
}