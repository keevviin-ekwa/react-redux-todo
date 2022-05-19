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

    type: Types.LOADING_ACTION

});

export const successAction = (tasks) => ({
    type: Types.SUCCESS_ACTION,
    payload: tasks
});

export const errorAction = (error) => ({
    type: Types.ERROR_ACTION,
    payload: error
});



export const getOnlineTodos = () => {

    return async (dispatch) => {
        dispatch(loadingAction());
        await fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                dispatch(loadingAction);
                dispatch(successAction(json));


            })
            .catch((error) => {
                dispatch(loadingAction);
                dispatch(errorAction(error));

            });
    };
};

export const selFilterAction = (task)=>({
    type:Types.UPDATE_FILTER,
    payload:task
})