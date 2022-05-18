import { Types } from "./types";

export const addTodoAction = (task) => ({
    type: Types.ADD_TODO,
    payload: task
});

export const modifyTodoAction = (task) => ({
    type: Types.MODIFY_TODO,
    payload: task
});

export const deleteTodoAction = (task) => ({
    type: Types.DELETE_TODO,
    payload: task
});

export const loadingAction = () => ({
    type: Types.LOADING_TODO
});

export const successAction = (tasks) => ({
    type: Types.SUCCESS_TODO,
    payload: tasks
});

export const errorAction = (error) => ({
    type: Types.ERROR_TODO,
    payload: error
});



export const getOnlineTodos = () => {
    return (dispatch) => {
        dispatch(loadingAction());
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                dispatch(loadingAction());
                dispatch(successAction(json));
            })
            .catch((error) => {
                dispatch(loadingAction());
                dispatch(errorAction(error));
            });
    };
};

export const selFilterAction = (task)=>({
    type:Types.UPDATE_FILTER,
    payload:task
})