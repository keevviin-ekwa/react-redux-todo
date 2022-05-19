import React from 'react';

function TodoItem({todo,onToggle,deleteTodo}) {

    return (

        <li className="list-group-item">
            <div className="input-group">
                <div className="input-group-text">
                    <input type="checkbox"
                           className="form-check-input mt-0"
                           checked={todo.completed}
                           onChange={()=>onToggle(todo)}
                    />
                </div>
               <span className="input-group-text"> {todo.title}</span>
                <button className="btn btn-danger input-group-text" onClick={()=>deleteTodo(todo)}>delete</button>
            </div>

        </li>
    );
}

export default TodoItem;