import { combineReducers } from "redux";
import counter, { counterSaga }from "./sagaCounter";
import sample from "./sample";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;