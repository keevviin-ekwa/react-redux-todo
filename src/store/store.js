import '../redux/reducers'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoReducer} from "../redux/reducers";
import {logger} from "redux-logger/src";
import {filterReducer} from "../redux/filterReducer";


const rootReducers= combineReducers(
    {todo: todoReducer,
            filter:filterReducer}
);

export const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );