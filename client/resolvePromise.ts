function resolvePromise(
  promiseToResolve: Promise<any> | null,
  promiseState: {
    promise: any | null;
    data: Object | null;
    error: String | null;
  },
  notifyACB: (arg0: any) => void
) {
  promiseState.promise = promiseToResolve;
  promiseState.data = null;
  promiseState.error = null;

  if (notifyACB) notifyACB(promiseState);
  function saveDataACB(result: Object | null) {
    if (promiseState.promise !== promiseToResolve) return;
    promiseState.data = result;
    console.log(result);
    if (notifyACB) notifyACB(promiseState);
  }

  function saveErrorACB(err: string) {
    if (promiseState.promise !== promiseToResolve) return;
    promiseState.error = err;
    if (notifyACB) notifyACB(promiseState);
  }
  if (promiseToResolve !== null)
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
}

export default resolvePromise;
export { resolvePromise };
