////index file что бы собрать все редюсеры в один
//// и тправить в стор
import {combineReducers} from "redux"
import input from "./input"
import data from "./data"

const rootReducer = combineReducers({
    input,
    data

})

export default rootReducer