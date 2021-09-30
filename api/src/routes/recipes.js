const router = require('express').Router();
const {Op, where} = require('sequelize');
const axios = require('axios');
const {conn, Recipe, Diet} = require ('../db');
const {API_KEY} = process.env;
const {normalizeRecipe} = require('../Recipes/Controller');
const {getRecipes, getRecipesById} = require('../Recipes/Store')

router.get('/', async(req, res) => {
    let response;
if(req.query.name){
    response =  await getRecipes(req.query.name);
}else response = await getRecipes();
    
if(response.length > 0) res.json(response);
else res.status(400).send('No se encontro la receta');
})

router.get('/:id', async(req,res) => {
    let {id} = req.params;
    try{
       let response = await getRecipesById(id); 
       res.json(response)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;