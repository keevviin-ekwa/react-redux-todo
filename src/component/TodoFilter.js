import React, {useCallback} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {selFilterAction} from "../redux/actions";
import {filterSelector} from "../store/Selectors";

function TodoFilter({value,onChange}) {
    return (
        <div className="btn-group my-3">
            <button disabled={value===null}  className="btn btn-primary" onClick={()=>onChange(null)} > aucun filtre</button>
            <button disabled={value===true} className="btn btn-warning" onClick={()=>onChange(true)} >Terminé</button>
            <button disabled={value===false} className="btn btn-info" onClick={()=>onChange(false)} >A faire</button>
        </div>
    );
}

export default TodoFilter;
// export function TodoFilterStore(){
//     const value= useSelector(filterSelector())
//     const dispatch= useDispatch();
//     const onChange= useCallback((value)=>{
//         dispatch(selFilterAction(value))
//     });
//
//     return <TodoFilter onChange={onChange}/>
// }

export const TodoFilterStore = connect(
    state => ({
        value:filterSelector(state)
    }),
    dispatch => ({
        onChange:(value)=>dispatch(selFilterAction(value))
    })
)(TodoFilter)