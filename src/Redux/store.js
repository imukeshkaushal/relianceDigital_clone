// Store Code Here
import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk"
import { postReducer } from "./Products/product.reducer";

const rootReducer = combineReducers({
    product:postReducer,
})

const composeEnhancer = window.__REDUX_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))