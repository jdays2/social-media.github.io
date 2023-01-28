import { createStore, combineReducers } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

const reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
