import '../redux/reducers'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {todoReducer} from "../redux/reducers";
import {logger} from "redux-logger/src";
import {filterReducer} from "../redux/filterReducer";
import {todoOnlineReducer} from "../redux/todoOnlineReducer";
import thunk from "redux-thunk";


const rootReducers= combineReducers(
    {todo: todoReducer,
            filter:filterReducer,
            onlineTodo:todoOnlineReducer

    }
);
const middlewares = [thunk,logger]
export const store = createStore(rootReducers,
   compose(
       applyMiddleware(...middlewares),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   )
  );