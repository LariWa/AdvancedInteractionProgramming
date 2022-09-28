import { Dispatch } from 'react';
import axios from 'axios'
import { Alert } from 'react-native';


export interface CategoriesModel {
    firstName: string;
    lastName: string;
    subscription: string;
    token: string;
}

export interface getCategoriesActionSuccess {
    readonly type: 'GET_CATEGORIES_SUCCESS';
    payload: any
}

export interface getCategoriesActionLoading {
    readonly type: 'GET_CATEGORIES_LOADING';
    payload: any
}

export interface getCategoriesActionError {
    readonly type: 'GET_CATEGORIES_ERROR';
    payload: any
}

export type getCategoriesAction = getCategoriesActionSuccess | getCategoriesActionLoading | getCategoriesActionError;

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

export const getCategoriesAction = () => {
    return async (dispatch:Dispatch<getCategoriesAction>) => { 
        axios.get('https://localhost:8080/api/get/categories/', {
            withCredentials:true,
        })
        .then(data => {
            console.log(data)
            setTimeout(() => {
                dispatch({ 
                    type: 'GET_CATEGORIES_SUCCESS',
                    payload: data
                }) 
                return data
            }, 2000)
        })
        .catch((error) => 
            dispatch({
            type: 'GET_CATEGORIES_ERROR', 
            payload: error
        }));
    };
};
