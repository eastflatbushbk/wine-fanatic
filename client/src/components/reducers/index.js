import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import  usersReducer from "./usersReducer";
import winesReducer from "./winesReducer";

export default combineReducers({
  errorsReducer: errorsReducer,
  usersReducer,
  winesReducer
})