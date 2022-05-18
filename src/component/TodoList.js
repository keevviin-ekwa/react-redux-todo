import React, {useCallback, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {filteredTodoSelector, todoSelector} from "../store/Selectors";
import { Types } from "../redux/types";
import {deleteTodoAction, modifyTodoAction} from "../redux/actions";
import TodoFilter, {TodoFilterStore} from "./TodoFilter";
import AddTodoForm from "./AddTodoForm";


function TodoList({todos,onToggle,deleteTodo}) {

    console.log(todos)
    return (
        <div className="container">
            <h1>Todo List</h1>
            <div >
            <AddTodoForm/>
            <ul className="list-group">
                {todos.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle} deleteTodo={deleteTodo}/>)}
            </ul>
            <TodoFilterStore/>
        </div>
        </div>
    );
}

export default TodoList;

// export const TodoListStore = connect(
//     (state)=> ({
//         todos:todoSelector(state)
//     }),
//     (dispatch)=>({
//         onToggle:todo => dispatch(modifyTodoAction(todo))
//     })
//
// )(TodoList)

export function TodoListStore(){
    const todos= useSelector(filteredTodoSelector)
    const dispatch= useDispatch();
    const onToggle= useCallback(todo=>{
        dispatch(modifyTodoAction(todo))
    },[])
    const deleteTodo= useCallback(todo=>{
        dispatch(deleteTodoAction(todo))
    })
    return <TodoList todos={todos} onToggle={onToggle} deleteTodo={deleteTodo}/>
}