import { v4 as uuidv4 } from "uuid";

const reducer = (state = [], action) => {
    //here state is the todos itself
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter((todo, index) => {
                const cond = typeof (action.id) !== 'number' ? todo.id !== action.id : index !== Number(action.id);
                return cond;
            });
        case "TOGGLE":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "EDIT":
            return state.map((todo, index) => {
                const cond = typeof (action.id) !== 'number' ? todo.id === action.id : index === action.id;
                const todoFinal = cond ? { ...todo, task: action.newTask } : todo;
                return todoFinal;
            }
            );
        default:
            return state;
    }
};

export default reducer;
