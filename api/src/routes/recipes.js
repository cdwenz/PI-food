const router = require('express').Router();
const {Op, where} = require('sequelize');
const axios = require('axios');
const {conn, Recipe} = require ('../db')
const {API_KEY} = process.env


router.get('/', async(req, res) => {
    let recipeAPI;
    let recipeDB;
if(req.query.name){
    try{
        const {name} = req.query
        recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&titleMatch=${name}&&addRecipeInformation=true&number=100`) 
        recipeDB = await Recipe.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${req.query.name}%`
                }
            }
        })
    }catch(err){
        res.status(404).send('No se encontro la receta')
    }

}else{
    try{
        recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&&addRecipeInformation=true&number=100`)
        recipeDB = await Recipe.findAll(
        {
            attributes: ['id', 'name', 'summary', 'score', 'health', 'step']
        }
    )
       
}catch(err){
    res.status(500).send('servidor no encontrado')
}
}
let recipes = [];
    recipeAPI.data.results.forEach(element => {
        const obj = {
            
            vegetarian: element.vegetarian,
            vegan: element.vegan,
            glutenFree: element.glutenFree,
            spoonacularScore: element.spoonacularScore,
            healthScore: element.healthScore,
            id: element.id,
            title: element.title,
            image: element.image,
            summary: element.summary,
            dishTypes: element.dishTypes,
            diets: element.diets,
            fromDB: false
        }
        recipes.push(obj);
    });
if(recipes.length > 0 || recipeDB.length > 0) res.json([...recipes, ...recipeDB]);
else res.status(400).send('No se encontro la receta')
})

router.get('/:id', async(req,res) => {
    const {id} = req.params;
    console.log(id)
    let recipeById = '';
    try{
        recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=738b1e7c005b45e9ba3cdd24de3da3c4`)
        console.log(recipeById.data)
        if(recipeById && !recipeById.status){
            var recipe = {};
            for(const prop in recipeById.data)
            if(prop === 'vegetarian' || prop === 'vegan' || prop ==='glutenFree' || prop === 'spoonacularScore' ||
                prop === 'healthScore' || prop === 'title' || prop === 'image' || prop === 'summary' ||
                prop === 'dishTypes' || prop === 'diets'){
                recipe = {...recipe, [prop]: recipeById.data[prop]};
            }
            res.json(recipe);
        }else{
            recipeById = await Recipe.findAll({
                where:{
                    id: {
                        [Op.eq]: id
                    }
                }
            })
            recipeById ? res.json(recipeById[0]) : res.status(404).send('No se encontro la receta');
        }
    }catch(e){
        res.status(404).send('No se encontro la receta');
    }
res.send('get/:id no funciono')
    
})

module.exports = router;