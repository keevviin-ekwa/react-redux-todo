import {Types} from "./types";


const INITIAL_STATE = {
    todos:[],
    success:false,
    error:null,
    loading:false,

};

export const todoOnlineReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case Types.SUCCESS_ACTION:
            return {
                ...state,
                loading: false,
                success: true,
                todos:action.payload
            }
        case Types.ERROR_ACTION:
                return  {
                    ...state,
                    loading: false,
                    error: action.payload,
                    todos: []
                }
        case Types.LOADING_ACTION:
            return  {
                ...state,
                loading: !state.loading,
                error: null
            }

        default:
            return  state;

    }
}