if(process.env.NODE_ENV !== "production") require('dotenv').config();
const { API_KEY, API_KEY2, API_KEY3, API_KEY4 } = process.env;
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../../db");
// const axios = require("axios");

async function getRecipes(name) {
  let recipeAPI, recipeDB;
  if (name) {
    //Busqueda por Query
    try {
      // recipeAPI = await axios.get(
      //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=a60c49d5ae7b4e43a123148df7061e8b&titleMatch=${name}&&addRecipeInformation=true&number=100`
      // );
      recipeDB = await Recipe.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: { model: Diet },
      });
    } catch ({ message: error }) {
      throw new Error(error);
    }
  } else {
    //Busqueda de Todas las recetas
    try {
      // recipeAPI = await axios.get(
      //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=a60c49d5ae7b4e43a123148df7061e8b&&addRecipeInformation=true&number=100`
      // );
      recipeDB = await Recipe.findAll({
        attributes: [
          "id",
          "name",
          "summary",
          "score",
          "image",
          "health",
          "steps",
        ],
        include: { model: Diet },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  // return [recipeAPI, recipeDB];
  return [recipeDB];
}

async function getRecipesById(id) {
  let recipeById;
  try {
    if (id.length === 36) {
      //Busqueda por UUID
      recipeById = await Recipe.findOne({
        where: { id: { [Op.eq]: id } },
        include: { model: Diet },
      });
      console.log(recipeById);
      return recipeById;
    } else {
      //Busqueda por id
      id = Number(id);
      // recipeById = await axios.get(
      //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=a60c49d5ae7b4e43a123148df7061e8b`
      // );
      // recipeById = recipeById.data;
      return recipeById;
    }
  } catch (e) {
    throw new Error("Recipe id is not found");
  }
}

async function postRecipe({
  name,
  summary,
  score,
  health,
  steps,
  dietName,
  image,
}) {
  if (!score) score = 1;
  if (!health) health = 1;
  if (typeof steps === "string") steps = [steps];
  try {
    const recipe = await Recipe.create({
      name,
      summary,
      score,
      health,
      steps,
    });

    if (dietName) {
      //['gluten free, vegan]
      let arrayDiet = await Diet.findAll({
        //[{object de gluten free}, {object vegan}]
        where: { name: dietName },
      });
      recipe.addDiet(arrayDiet);
    }
    return recipe;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getRecipes,
  postRecipe,
  getRecipesById,
};
