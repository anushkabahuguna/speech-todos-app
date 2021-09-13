import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
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

  return [state, setState];
}

export default useLocalStorageState;
