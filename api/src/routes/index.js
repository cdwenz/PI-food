const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets = require('./diets')
const recipes = require('./recipes')
const recipe = require('./recipe')
const types = require('./types')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/diets', diets);
router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/types', types);


// Pagina inicial: deben armar una landing page con
//  Alguna imagen de fondo representativa al proyecto
//  Botón para ingresar al home (Ruta principal)

router.get('/', (req, res) => {
    res.send('Landing Page')
})



module.exports = router;
