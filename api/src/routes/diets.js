const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('llegamos al routeDiets')
})




module.exports = router;