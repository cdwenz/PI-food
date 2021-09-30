


function normalizeRecipe(element){
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
    return obj;
}

module.exports = {
    normalizeRecipe,
    
}