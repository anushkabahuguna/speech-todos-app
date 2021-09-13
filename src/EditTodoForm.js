import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/Todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const [newTask, changeNewTask, resetNewTask] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id, newTask });
        resetNewTask();
        toggleIsEditing();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={newTask}
        margin="normal"
        onChange={changeNewTask}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
