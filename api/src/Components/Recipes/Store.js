const {API_KEY} = process.env;
const {Op} = require('sequelize');
const {Recipe, Diet} = require ('../../db');
const {normalizeRecipeAPI, normalizeRecipeDB} = require('./Controller');
const axios = require('axios');

async function getRecipes(name){
    let recipeAPI, recipeDB;
    if(name){   //Busqueda por Query
        try{
            recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&titleMatch=${name}&&addRecipeInformation=true&number=100`) 
            console.log(recipeAPI)
            recipeDB = await Recipe.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` }
                },
                include: { model: Diet }
            })
        }catch({message: error}){throw new Error(error)}

    }else{  //Busqueda de Todas las recetas
        try{
            recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&&addRecipeInformation=true&number=5`)
            recipeDB = await Recipe.findAll(
            {
                attributes: ['id', 'name', 'summary', 'score','image', 'health', 'steps'],
                include: { model: Diet }
            }
        )

        }catch(e){throw new Error('No se encontraron recetas')}
    }
    //Normalizacion de la respuesta
    let recipes = [];
    recipeAPI.data.results.forEach(element => {
        const obj = normalizeRecipeAPI(element)
        recipes.push(obj);
    });

    recipeDB = normalizeRecipeDB(recipeDB)
    

    if(recipes.length > 0 || recipeDB.length > 0) return([...recipes, ...recipeDB]);
    else throw new Error('Recipe is not found')
};

async function getRecipesById(id){
    let recipeById;
    try{
        if(id.length === 36){//Busqueda por UUID
            recipeById = await Recipe.findOne({
                where:{ id: { [Op.eq]: id } },
                include: { model: Diet, attributes: ['name', 'id']}
            })
            return recipeById;
        }else{//Busqueda por id
            id = Number(id)
            recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            recipeById = recipeById.data;
            var recipe = normalizeRecipeAPI(recipeById);
            let stepToStep = [];
            recipe.steps?.steps.forEach(e=>{
                let objeto = {number: e.number, step: e.step}
                stepToStep.push(objeto)
            })
            console.log(recipe.steps)
            recipe.steps = stepToStep
            console.log(recipe.steps)
            return recipe;
        }
    }catch(e){
        throw new Error('Recipe id is not found')
    }
}
module.exports = {
    getRecipes,
    getRecipesById
}