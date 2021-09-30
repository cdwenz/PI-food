const {API_KEY} = process.env;
const {Op} = require('sequelize');
const {Recipe, Diet} = require ('../db');
const {normalizeRecipe} = require('./Normalize');
const axios = require('axios');


async function getRecipes(name){
    let recipeAPI, recipeDB;
    if(name){
        try{
            recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&titleMatch=${name}&&addRecipeInformation=true&number=100`) 
            recipeDB = await Recipe.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Diet,
                    attributes: ['name', 'id'],
                }
            })
        }catch({message: error}){throw new Error(error)}

    }else{
        try{
            recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&&addRecipeInformation=true&number=100`)
            recipeDB = await Recipe.findAll(
            {
                attributes: ['id', 'name', 'summary', 'score', 'health', 'step'],
                include: { model: Diet, attributes: ['name', 'id'] }
            }
        )
        }catch(err){return err}
    }

    let recipes = [];
    recipeAPI.data.results.forEach(element => {
        const obj = normalizeRecipe(element)
        recipes.push(obj);
    });
    
    if(recipes.length > 0 || recipeDB.length > 0) return([...recipes, ...recipeDB]);
    else return ([])
};

async function getRecipesById(id){
    let recipeById;
    try{
        if(id.length === 36){
            recipeById = await Recipe.findAll({
                where:{ id: { [Op.eq]: id } },
                include: { model: Diet, attributes: ['name', 'id']}
            })
        return recipeById;
        
        }else{
            recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            console.log(RecipeById)
            recipeById = recipeById.data;
            console.log(RecipeById)
            var recipe = normalizeRecipe(recipeById);
            console.log(Recipe)
            return recipe;
        }
    }catch(e){
        throw new Error(e)
    }
}
module.exports = {
    getRecipes,
    getRecipesById
}