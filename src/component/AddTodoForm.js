import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodoAction} from "../redux/actions";
import { v4 as uuidv4 } from 'uuid';

function AddTodoForm(props) {
    const input = useRef(null);
    const dispacth= useDispatch();
    function handleSubmit(e){
        e.preventDefault()
        dispacth(addTodoAction({id:uuidv4(),title:input.current.value,completed:false}))
        input.current.value='';
        input.current.focus();

    }

    return (
        <form onSubmit={handleSubmit} className="input-group my-5">
          <input ref={input} className="form-control" type='text' />
            <button  className="btn btn-primary" >Ajouter</button>
        </form>
    );
}

export default AddTodoForm;