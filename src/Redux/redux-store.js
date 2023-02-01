import { createStore, combineReducers, applyMiddleware } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;

window.store = store;
