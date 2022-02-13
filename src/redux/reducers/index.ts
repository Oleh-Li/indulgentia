////index file что бы собрать все редюсеры в один
//// и тправить в стор
import { combineReducers } from "redux";
import input from "./input";
import data from "./data";
import select from "./select";
import letterFlag from "./letterFlag";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
  input,
  data,
  select,
  letterFlag,
  loading,
});

export default rootReducer;
