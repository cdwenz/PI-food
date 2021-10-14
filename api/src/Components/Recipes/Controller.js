const { normalizeRecipeDBbyID, normalizeRecipeAPI, normalizeRecipeDB } = require("./functions");
const store = require("./Store");


async function getRecipes(name){
    try{
        
        let recipes = await store.getRecipes(name)
        let recipeAPI = [];
        let recipeDB;
        recipes[0].data.results.forEach(element => {
            const obj = normalizeRecipeAPI(element)
            recipeAPI.push(obj);
        });
        
        recipeDB = normalizeRecipeDB(recipes[1])
        
        if(recipeAPI.length > 0 || recipeDB.length > 0) return([...recipeAPI, ...recipeDB]);
        else throw new Error('Recipe not found')
        
    }catch(err){
        throw new Error(err.message)
    } 
}

async function getRecipesById(id){
    try{
        let recipeById = await store.getRecipesById(id)
        if(!recipeById) throw new Error('Recipe not found');
        if(id.length === 36) {
            recipeById = normalizeRecipeDBbyID(recipeById);
        }
        else{
            recipeById = normalizeRecipeAPI(recipeById);
            let stepToStep = [];
            recipeById.steps?.steps.forEach(e=>{
                stepToStep.push(e.step)
            })
            recipeById.steps = stepToStep
        }
        return recipeById
    }catch(err){
        throw new Error(err.message)
    }
}

async function postRecipe(body){
    let response = await store.postRecipe(body);
    return response
}

module.exports = {
    getRecipes,
    postRecipe,
    getRecipesById
}