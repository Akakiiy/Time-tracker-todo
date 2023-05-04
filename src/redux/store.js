import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import timersReducer from "./timers-reducer";
import newTimerFormReducer from "./newTimerForm-reducer";

const reducers = combineReducers({
    timersSection: timersReducer,
    newTimerForm: newTimerFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;