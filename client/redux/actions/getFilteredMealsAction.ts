import { Dispatch } from 'react';
import axios from 'axios'


export interface getFilteredMealsSuccess {
    readonly type: 'GET_FILTERED_MEALS_SUCCESS';
    payload: any
}

export interface getFilteredMealsLoading {
    readonly type: 'GET_FILTERED_MEALS_LOADING';
    payload: any
}

export interface getFilteredMealsError {
    readonly type: 'GET_FILTERED_MEALS_ERROR';
    payload: any
}

export type getFilteredMealsAction = getFilteredMealsSuccess | getFilteredMealsLoading | getFilteredMealsError;


export const getFilteredMealsAction = (category: string, area: string, ingredients: string) => {
    return async (dispatch:Dispatch<getFilteredMealsAction>) => { 
        axios.post('https://localhost:8080/api/post/filterMeals/post/filterMeals/', 
            {category: category,
            area: area,
            ingredients: ingredients
            },
            {withCredentials:true},
        )
        .then(data => {
            console.log(data)
            setTimeout(() => {
                dispatch({ 
                    type: 'GET_FILTERED_MEALS_SUCCESS',
                    payload: data
                }) 
                return data
            }, 2000)
        })
        .catch((error) => 
            dispatch({
            type: 'GET_FILTERED_MEALS_ERROR', 
            payload: error
        }));
    };
};