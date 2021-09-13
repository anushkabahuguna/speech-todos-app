import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      console.log(e);
      val = defaultVal;
    }
    return val;
  });

  //use Effect will used to update and data will be synced to local storage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
