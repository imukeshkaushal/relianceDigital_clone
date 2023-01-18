// Store Code Here

import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  
import thunk from "redux-thunk";
import { adminReducer } from "./admin/admin.reducer";

  
  const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
        adminProductsManager : adminReducer,
  });
  export const store = legacy_createStore(
    rootReducer,
    composeInhancer(applyMiddleware(thunk))
  );