import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ratesReducer } from "./ratesReducer/rates";
import { createLogger } from "redux-logger";
import { convertReducer } from "./convertReducer/convert";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  rates: ratesReducer,
  convert: convertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
