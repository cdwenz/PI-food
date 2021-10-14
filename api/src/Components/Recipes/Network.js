const router = require('express').Router();
const Controller = require('./Controller');
const {Recipe, Diet} = require ('../../db');

router.get('/', async(req, res) => {
    let response;
    
if(req.query.name){
    try{
        response =  await Controller.getRecipes(req.query.name);
        res.status(200).json(response)
    }catch({message: error}){
        res.status(404).json(error);
    }
}else {
    try{
        
        response = await Controller.getRecipes();
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
       let response = await Controller.getRecipesById(id); 
       res.json(response)
    }catch({message: error}){
        res.status(500).send(error)
    }
})

router.post('/', async(req,res) => {
    if(!req.body.name || !req.body.summary) return res.status(404).send('Name and Summary are required')
    try{
        let recipe = await Controller.postRecipe(req.body)
        res.json(recipe);
    }catch(err){
        res.status(404).send(err);
    }
})

router.delete('/:id', async (req, res)=>{
    if(req.params.id.length !== 36) return res.status(404).json('Invalid ID');
    try{
        let response = await Recipe.destroy({where: {
                id: req.params.id
            }})
        res.json(response)
    }catch(err){
        res.status(404).json('no se borro')
    }
  
})

module.exports = router;