import { Dispatch } from 'react';
import axios from 'axios'
import { Alert } from 'react-native';

//Get random meal (no par)
//Get meal details (id)
//Get filtered meal (category, area, ingredients)
export interface MealModel {
    firstName: string;
    lastName: string;
    subscription: string;
    token: string;
}

export interface getRandomMealActionSuccess {
    readonly type: 'GET_RANDOM_MEAL_SUCCESS';
    payload: any
}

export interface getRandomMealActionLoading {
    readonly type: 'GET_RANDOM_MEAL_LOADING';
    payload: any
}

export interface getRandomMealActionError {
    readonly type: 'GET_RANDOM_MEAL_ERROR';
    payload: any
}




export type getRandomMealAction = getRandomMealActionSuccess | getRandomMealActionLoading | getRandomMealActionError;

const handleErrorACB =  (response: any) => {
    if (!response.ok) { 
       throw response.statusText
    } else {
       return response.json()
    }
}

const handleNoMealACB = (response: any) => {
    if (response.error) {
        throw response.error
    } else {
        return response
    }
}

export const getRandomMealAction = () => {
    return async (dispatch:Dispatch<getRandomMealAction>) => { 
        axios.get('https://localhost:8080/api/get/randomMeal/', {
            withCredentials:true,
        })
        .then(data => {
            console.log(data)
            setTimeout(() => {
                dispatch({ 
                    type: 'GET_RANDOM_MEAL_SUCCESS',
                    payload: data
                }) 
                return data
            }, 2000)
        })
        .catch((error) => 
            dispatch({
            type: 'GET_RANDOM_MEAL_ERROR', 
            payload: error
        }));
    };
  };

// export const getFilteredMealsAction = () => {
//     return async (dispatch:Dispatch<getFilteredMealsAction>) => { 
//         axios.get('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', {
//             withCredentials:true,
//         })
//         .then(handleErrorACB)
//         .then(handleNoMealACB)
//         .then(data => {
//             console.log(data)
//             setTimeout(() => {
//                 dispatch({ 
//                     type: 'GET_FILTERED_MEALS_SUCCESS',
//                     payload: data
//                 }) 
//                 return data
//             }, 2000)
//         })
//         .catch((error) => 
//             dispatch({
//             type: 'GET_FILTERED_MEALS_ERROR', 
//             payload: error
//         }));
//     };
// };