import React from "react";
import { Paper, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./contexts/Todos.context";
function TodoApp() {
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#2b2442",
            }}
            elevation={0}
        >

            <Grid container justifyContent="center" style={{ marginTop: '1rem', marginLeft: `3.5px` }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;

//each todo will have an id,task,completed
