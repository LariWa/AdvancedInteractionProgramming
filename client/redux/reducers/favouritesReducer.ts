export const favouritesReducer = (
  state: FavState = initFavState,
  action: any
) => {
  switch (action.type) {
    case "ADD_TO_FAV" || "DELETE_FAV":
      return {
        data: state.data,
        loading: true,
        success: false,
        error: false,
      };
    case "ADD_TO_FAV_SUC":
      return {
        data: [...state.data, action.payload],
        loading: false,
        success: true,
        error: false,
      };
    case "DELETE_FAV_SUC":
      return {
        data: state.data.filter((fav) => fav !== action.payload),
        loading: false,
        success: true,
        error: false,
      };
    case "MANIPULATE_FAV_ERROR":
      return {
        data: state.data,
        loading: false,
        success: false,
        error: action.payload,
      };
    case "SET_FAVS":
      return {
        data: action.payload,
        loading: false,
        success: true,
        error: false,
      };
    case "GET_FAVS_SUC":
      return {
        data: action.payload,
        loading: false,
        success: true,
        error: false,
      };
    default:
      return state;
  }
};
type FavState = {
  data: Array<string>;
  loading: boolean | null;
  error: string | boolean | null;
};
const initFavState = {
  data: <Array<string>>[],
  loading: false,
  error: <string | null | boolean>false,
};
