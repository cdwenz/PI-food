const {Diet} = require('../db')

const diets = ['Gluten free',
            'Ketogenic',
            'Vegetarian',
            'Lacto-Vegetarian',
            'Ovo-Vegetarian',
            'Vegan',
            'Pescetarian',
            'Paleo',
            'Primal',
            'Low FODMAP',
            'Whole30'];
            
function preload(element) {
    if(!element.length){
      diets.forEach(async (e) => {
        await Diet.create({
          name: e
        })
      })
    }
  }

  

module.exports = {
    preload
}