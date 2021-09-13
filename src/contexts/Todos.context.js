//todos and all methods that interact with todo
//use the hook which we already made
import React, { createContext, useEffect } from "react";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
// we are making two context because even when todos are not changing components are rerendered

export const DispatchContext = createContext();

export function TodosProvider(props) {
  var initialTodos = [];
  useEffect(() => {
    initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  }, []);

  // call dispatch with the action and other parameters
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    todoReducer
  );
  return (
    // value={{ todos, dispatch }}
    <TodosContext.Provider value={todos}>
      {/* {{ dispatch }} */}
      {/* // but this makes aan object every single time so we should change it */}
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
