const router = require('express').Router();
const {Recipe, Diet} = require ('../db')



router.post('/', async(req,res) => {
    const {name, summary, score, health, step, dietName} = req.body;
    if(!name || !summary) return res.status(404).send('Name and Summary are required')
    try{
        const recipe = await Recipe.create({
            name,
            summary,
            score,
            health,
            step
        })
        if(dietName){
            
            let arrayDiet = await Diet.findAll({
                where: {name: dietName}
            })
            console.log(arrayDiet)
           recipe.addDiet(arrayDiet)
            // dietName.forEach(async (element) =>{
            //     const diet = await Diet.findOne({ where: { name: element } })
            //     if(diet !== null) recipe.addDiet(diet)
            // })
        }
        res.json(recipe);
    }catch(err){
        res.status(404).send(err);
    }
})


module.exports = router;