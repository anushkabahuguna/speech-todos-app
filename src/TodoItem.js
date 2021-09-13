import React, { useContext, memo } from "react";
import EditTodoForm from "./EditTodoForm";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import useToggle from "./hooks/useToggle";
import { DispatchContext } from "./contexts/Todos.context";
import './TodoItem.css';

function TodoItem({ task, completed, id }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: "64px", backgroundColor: completed ? '#d8bdff' : 'rgb(243, 171, 201)' }} className='TodoItem' onClick={() => dispatch({ type: "TOGGLE", id })}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>

          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none", opacity: completed ? 0.7 : 1, }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id })}
            >
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(TodoItem);
