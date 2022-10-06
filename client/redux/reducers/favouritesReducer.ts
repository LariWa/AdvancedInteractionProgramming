export const favouritesReducer = (
  state: FavState = initFavState,
  action: any
) => {
  switch (action.type) {
    case "ADD_TO_FAV" || "DELETE_FAV":
      return {
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
    case "DELETE_TO_FAV_SUC":
      return {
        data: state.data.filter((fav) => fav !== action.payload),
        loading: false,
        success: true,
        error: false,
      };
    case "MANIPULATE_FAV_ERROR":
      return {
        loading: false,
        success: false,
        error: action.payload.error,
      };
    case "SET_FAVS":
      return {
        data: action.payload,
        loading: false,
        success: true,
        error: false,
      };
  }
};
type FavState = {
  data: Array<string>;
  loading: boolean | null;
  error: string | null;
};
const initFavState = {
  data: <Array<string>>[],
  loading: false,
  error: <string | null>null,
};
