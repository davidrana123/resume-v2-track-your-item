import { combineReducers } from 'redux'
import counterReducer from "./counterReducer";
import incressTwenty from "./incressTwenty";

const reducers = combineReducers({
    count: counterReducer,
    twentyCount: incressTwenty,
})

export default reducers;