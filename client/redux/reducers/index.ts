import { combineReducers } from 'redux';
import { getRandomMealReducer } from './getRandomMealReducer';
import { getMealReducer } from './getMealReducer';
import { getCategoriesReducer } from './getCategoriesReducer';

const rootReducer = combineReducers({
  randomMeal: getRandomMealReducer,
  meal: getMealReducer,
  categories: getCategoriesReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };