import { Dispatch } from 'react';
import axios from 'axios'

//Get random meal (no par)
//Get meal details (id)
//Get filtered meal (category, area, ingredients)
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

export interface getMealActionLoading {
    readonly type: 'GET_MEAL_LOADING';
    payload: any
}

export interface getMealActionError {
    readonly type: 'GET_MEAL_ERROR';
    payload: any
}

export type getMealAction = getMealActionSuccess | getMealActionLoading | getMealActionError;

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

export const getMealAction = (id: number) => {
    return async (dispatch:Dispatch<getMealAction>) => { 
        console.log(id)
        axios.post('https://localhost:8080/api/post/mealDetails/', {id: id}, {withCredentials:true})
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

