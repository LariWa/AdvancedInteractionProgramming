import { combineReducers } from 'redux';
import { getMealReducer } from './getMealReducer';

const rootReducer = combineReducers({
  randomMeal: getMealReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };