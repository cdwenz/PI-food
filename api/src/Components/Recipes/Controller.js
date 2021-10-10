
function normalizeRecipeDB(array){
    let aux = [];
    array.map( (e) =>{
    let dietDB = e.dataValues.diets.map(el => el.name)
    let obj = {
        ...e.dataValues,
        diets: dietDB
    }
    aux.push(obj)
    })
    return aux;
}

function plain(word){
    return word.replace(/[.!,()?]/g, "")
}

function normalizeRecipeAPI(element){
   
    const obj = {
        vegetarian: element.vegetarian,
        vegan: element.vegan,
        glutenFree: element.glutenFree,
        score: element.spoonacularScore,
        health: element.healthScore,
        id: element.id,
        name: element.title,
        image: element.image,
        summary: element.summary,
        dishTypes: element.dishTypes,
        diets: element.diets,
        steps: element.analyzedInstructions?element.analyzedInstructions[0]:null
    }
    return obj;
}

module.exports = {
    normalizeRecipeAPI,
    normalizeRecipeDB
}