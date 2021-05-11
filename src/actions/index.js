import {ADD_RECIPE, ADD_BOX, ADD_FLUFF, DELETE_RECIPE, TOGGLE_RECIPE, ADD_INSTRUCTIONS} from './actionTypes';

let nextId = 0;
let ingredientsId = 1000;
let instructionsId = 2000;
let boxId = 0;
export const addRecipe = (title, ingredients, instructions) => ({
    type: ADD_RECIPE,
    id: nextId++,
    title,
    ingredients,
    instructions
})

export const addBox = (title) => ({
    type: ADD_BOX,
    id: boxId++,
    title,
})

export const addFluff = (ingredients, instructions) => ({
    type: ADD_FLUFF,
    id: ingredientsId++,
    ingredients
})

export const addInstructions = (instructions) => ({
    type: ADD_INSTRUCTIONS,
    id: instructionsId++,
    instructions
})

export const deleteRecipe = recipe => ({
    type: DELETE_RECIPE,
    payload: recipe
})

export const toggleRecipe = (id) => ({
    type: TOGGLE_RECIPE,
    id
})