import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {ratesReducer} from "./ratesReducer/rates";
import {createLogger} from "redux-logger";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    rates: ratesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;