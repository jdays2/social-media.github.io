import { createStore, combineReducers } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
