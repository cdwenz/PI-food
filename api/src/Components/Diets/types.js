const router = require('express').Router();
const {Diet} = require ('../../db');

router.get('/', async (req, res)=>{
    try{
        let diets = await Diet.findAll();
        diets = diets.map(e=>e.name)
        res.json(diets);
    }catch(e){
        res.status(400).send(e);
    }
})



module.exports = router;