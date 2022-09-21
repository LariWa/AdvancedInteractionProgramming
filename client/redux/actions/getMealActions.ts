import { Dispatch } from 'react';
import axios from 'axios'


export interface MealModel {
    firstName: string;
    lastName: string;
    subscription: string;
    token: string;
}


export interface getMealActionSuccess {
    readonly type: 'GET_MEAL_SUCCESS';
    payload: any
}

export interface getMealActionError {
    readonly type: 'GET_MEAL_ERROR';
    payload: any
}

export type getMealAction = getMealActionSuccess | getMealActionError;

export const getMeal = () => {
    return async (dispatch:Dispatch<getMealAction>) => { 
        //axios.get('https://www.boredapi.com/api/activity')
        axios.get('https://localhost:8080/api/get/randomMeal', {withCredentials:true })
                //fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        //.then(data => data)
        .then(data => {
            console.log(data)
            setTimeout(() => {
                dispatch({ 
                    type: 'GET_MEAL_SUCCESS',
                    payload: data
                }) 
                return data
            }, 2000)
        })
        .catch((error) => 
            dispatch({
            type: 'GET_MEAL_ERROR', 
            payload: error
        }));
    };
  };