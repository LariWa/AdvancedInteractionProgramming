import { getMealAction, MealModel } from '../actions/getMealActions';

type MealState = {
    meal: MealModel,
    error: string | undefined
};
const  initState = {
    meal: {} as MealModel,
    error: undefined,
}

export const getMealReducer = (state: MealState = initState, action: getMealAction) => {
    switch(action.type) {
        case 'GET_MEAL_SUCCESS':
            return{
                ...state,
                meal: action.payload
            }
        case 'GET_MEAL_ERROR':
            return{
                ...state,
                error: action.payload,
                meal: null
            }
        default:
            return state
    }
    
}