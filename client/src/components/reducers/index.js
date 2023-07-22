import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import  usersReducer from "./usersReducer";
import winesReducer from "./winesReducer";
import usersWinesReducer from "./usersWinesReducer";

export default combineReducers({
  errorsReducer: errorsReducer,
  usersReducer, 
  usersWinesReducer,
  winesReducer
})