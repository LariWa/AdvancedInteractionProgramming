import { combineReducers } from "redux";
import { favouritesReducer } from "./favouritesReducer";
const user = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;

    default:
      return state;
  }
};
const token = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  token: token,
  user: user,
  favourites: favouritesReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };