import {createSelector} from "reselect";

export const  todoSelector=({todo})=>todo.tasks;
export const filterSelector= ({filter})=>filter;
export const onlineTodoSelector =({onlineTodo})=>onlineTodo.todos;


export const filteredTodoSelector= ({todo, filter})=>{
    if (filter===null){
        return todo.tasks;
    }
    return  todo.tasks.filter(todo=>todo.completed===filter);
}
// export const filteredTodoSelector= createSelector(
//     todoSelector,
//     filterSelector,
//     (todo,filter) =>{
//         if (filter===null){
//          return todo.tasks;
//              }
//          return  todo.tasks.filter(todo=>todo.completed===filter);
//
//     }
// )