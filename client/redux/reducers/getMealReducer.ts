import {  getMealAction, MealModel } from '../actions/getMealActions';

type MealState = {
    meal: MealModel,
    loading: boolean | undefined,
    error: string | undefined
};

const  initMealState = {
    meal: {} as MealModel,
    loading: false,
    error: undefined,
}

export const getMealReducer = (state: MealState = initMealState, action: getMealAction) => {
    switch(action.type) {
        case 'GET_MEAL_LOADING':
            return{
                loading: true,
                meal: null, 
                error: false
            }
        case 'GET_MEAL_SUCCESS':
            return{
                meal: action.payload,
                loading: false
            }
        
        case 'GET_MEAL_ERROR':
            return{
                loading: false,
                error: action.payload,
                meal: null
            }
        default:
            return state
    }
    
}
