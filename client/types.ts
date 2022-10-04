type promiseStateType = {
  promise: any | null;
  data: null | Object;
  error: String | null;
};
type test = {
  promise: any;
  data: Object | null;
  error: String | null;
};
export type { promiseStateType, test };
