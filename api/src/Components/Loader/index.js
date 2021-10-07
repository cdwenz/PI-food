const {Diet} = require('../../db')

const diets = ['Gluten free',
            'dairy free',
            'paleolithic',
            'ketogenic',
            'lacto ovo vegetarian',
            'vegan',
            'pescatarian',
            'primal',
            'fodmap friendly',
            'whole 30'];
            
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