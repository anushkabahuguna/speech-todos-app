import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "./contexts/Todos.context";
import { Paper, List, Divider } from "@material-ui/core";
function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length > 0)
    return (
      <Paper style={{ overflowY: 'auto', height: '350px', backgroundColor: ` rgb(243, 171, 201)` }}>
        <List disablePadding style={{ height: '100%' }}>
          {todos.map((todo, index) => (
            // JSX/REACT FRAGMENT  WON'T RESULT IN EXTRA MARKUP ---- JUST TO GROUP  ELEMENTS
            <div key={todo.id} >
              <TodoItem {...todo} />
              {index <= todos.length - 1 && <Divider style={{ backgroundColor: 'rgb(19, 7, 51)' }} />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
