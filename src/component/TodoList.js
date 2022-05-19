import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {filteredTodoSelector, onlineTodoSelector, todoSelector} from "../store/Selectors";
import {deleteTodoAction, getOnlineTodos, modifyTodoAction} from "../redux/actions";
import {TodoFilterStore} from "./TodoFilter";
import AddTodoForm from "./AddTodoForm";


function TodoList({todos,onToggle,deleteTodo,onlineTodo}) {
    const dispacth= useDispatch();
    const content= useSelector(state=>state);
    useEffect(
        ()=>{

             dispacth(getOnlineTodos())
            console.log("contenu",content.onlineTodo)



        },[]
    )

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div >
            <AddTodoForm/>
            <ul className="list-group">
                {todos.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle} deleteTodo={deleteTodo}/>)}
            </ul>
            <TodoFilterStore/>
                <br/>
                <br/>
                <h1>Todo List Online</h1>

                <ul className="list-group">
                    {/*{onlineTodo.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle} deleteTodo={deleteTodo}/>)}*/}
                </ul>

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
    const onlineTodo= useSelector(onlineTodoSelector);
    const dispatch= useDispatch();

    const onToggle= useCallback(todo=>{
        dispatch(modifyTodoAction(todo))
    },[])
    const deleteTodo= useCallback(todo=>{
        dispatch(deleteTodoAction(todo))
    },[])
    return <TodoList todos={todos} onToggle={onToggle} deleteTodo={deleteTodo} onlineTodo={onlineTodo}/>
}