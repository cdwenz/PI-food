const { Router } = require('express');
const recipes = require('../Components/Recipes/Network')
const types = require('../Components/Diets/types')
const router = Router();

router.use('/recipes', recipes);
router.use('/types', types);


// Pagina inicial: deben armar una landing page con
//  Alguna imagen de fondo representativa al proyecto
//  Botón para ingresar al home (Ruta principal)





module.exports = router;
