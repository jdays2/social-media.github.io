import { createStore, combineReducers } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
