import rootReducer from "../Dispatch/reducer";

test('should return initial state', () => {
    expect(rootReducer(undefined,{})).toEqual({
    serverDown: true,
    originRec: "",
    recipes: "",
    recipesByQuery: "",
    page: {
        recipes: 1,
        recipesByQuery: 1
        },
    search: "",
    diets: ""
    })
})