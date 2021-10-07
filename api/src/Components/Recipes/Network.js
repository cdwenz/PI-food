const router = require('express').Router();
const {Op, where} = require('sequelize');
const axios = require('axios');
const {conn, Recipe, Diet} = require ('../../db');
const {API_KEY} = process.env;
const {normalizeRecipe} = require('./Controller');
const {getRecipes, getRecipesById} = require('./Store')

router.get('/', async(req, res) => {
    let response;
    
if(req.query.name){
    try{
        response =  await getRecipes(req.query.name);
        res.status(200).json(response)
    }catch({message: error}){
        res.status(404).json(error);
    }
}else {
    try{
        response = await getRecipes();
        res.status(200).json(response)
    }catch({message: error}){
        console.log(error)
        res.status(500).json(error)
    }
}
})

router.get('/:id', async(req,res) => {
    let {id} = req.params;
    
    try{
       let response = await getRecipesById(id); 
       res.json(response)
    }catch({message: error}){
        res.status(500).send(error)
    }
})

router.post('/', async(req,res) => {
    const {name, summary, score, health, steps, dietName, image} = req.body;
   
    if(!name || !summary) return res.status(404).send('Name and Summary are required')
    try{
        const recipe = await Recipe.create({
            name,
            summary,
            score,
            health,
            steps,
            fromDB: true
        })
        if(dietName){//['gluten free, vegan]
            let arrayDiet = await Diet.findAll({    //[{object de gluten free}, {object vegan}]
                where: {name: dietName} 
            })
           recipe.addDiet(arrayDiet)

        }
        res.json(recipe);
    }catch(err){
        res.status(404).send(err);
    }
})

module.exports = router;