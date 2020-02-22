import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};
export const removeIngredient = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};
export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientFailed = () =>{
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () =>{
    return dispatch => {
        axios
      .get('https://my-burger-64f3a.firebaseio.com/ingredients.json')
      .then(response => {
        console.log(response);
        dispatch(setIngredients(response.data));
      })
      .catch(err => {
       dispatch(fetchIngredientFailed());
      });
    };
};