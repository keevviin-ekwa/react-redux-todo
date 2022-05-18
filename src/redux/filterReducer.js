import {Types} from "./types";

export function filterReducer(state=null,action){
    switch (action.type){
        case Types.UPDATE_FILTER:
            return action.payload
        default:
            return state;
    }
}