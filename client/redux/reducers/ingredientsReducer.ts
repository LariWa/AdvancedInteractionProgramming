export const ingredientsReducer = (
  state: IngrState = initIngrState,
  action: any
) => {
  switch (action.type) {
    case "ADD_TO_INGR" || "DELETE_INGR":
      return {
        data: state.data,
        loading: true,
        success: false,
        error: false,
      };
    case "ADD_TO_INGR_SUC":
      return {
        data: [...state.data, action.payload],
        loading: false,
        success: true,
        error: false,
      };
    case "DELETE_INGR_SUC":
      console.log(action);
      return {
        data: state.data.filter((ingr) => ingr !== action.payload),
        loading: false,
        success: true,
        error: false,
      };
    case "MANIPULATE_INGR_ERROR":
      return {
        data: state.data,
        loading: false,
        success: false,
        error: action.payload,
      };
    case "SET_INGR":
      return {
        data: action.payload,
        loading: false,
        success: true,
        error: false,
      };
    case "GET_INGR_SUC":
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
type IngrState = {
  data: Array<string>;
  loading: boolean | null;
  error: string | boolean | null;
};
const initIngrState = {
  data: <Array<string>>[],
  loading: false,
  error: <string | null | boolean>false,
};
