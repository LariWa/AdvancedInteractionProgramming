import {  getCategoriesAction, CategoriesModel } from '../actions/getCategoriesActions';

type CategoriesState = {
    categories: CategoriesModel,
    loading: boolean | undefined,
    error: string | undefined
};
const  initCategoriesState = {
    categories: {} as CategoriesModel,
    loading: false,
    error: undefined,
}


export const getCategoriesReducer = (state: CategoriesState = initCategoriesState, action: getCategoriesAction) => {
    switch(action.type) {
        case 'GET_CATEGORIES_LOADING':
            return{
                loading: true,
                categories: null, 
                error: false
            }
        case 'GET_CATEGORIES_SUCCESS':
            return{
                categories: action.payload,
                loading: false
            }
        
        case 'GET_CATEGORIES_ERROR':
            return{
                loading: false,
                error: action.payload,
                categories: null
            }
        default:
            return state
    }
    
}