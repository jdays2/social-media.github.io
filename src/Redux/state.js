import profileReducer from "./profilePageReducer";
import messageReducer from "./messagePageReducer";
import { UPDATE_NEW_POST_TEXT, ADD_POST } from "./profilePageReducer";
import { UPDATE_NEW_MESSAGE, SEND_MESSAGE } from "./messagePageReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi! Thats my 1st post", likeCount: 12 },
        { id: 2, message: "Hi! Thats my 2st post", likeCount: 1 },
        { id: 3, message: "Hi! Thats my 3st post", likeCount: 2 },
        { id: 4, message: "Hi! Thats my 4st post", likeCount: 112 },
      ],
      newPostText: "",
    },

    messagePage: {
      dialogesData: [
        { id: 1, name: "Mark" },
        { id: 2, name: "Vitalya" },
        { id: 3, name: "Kirillko" },
        { id: 4, name: "Sanya" },
        { id: 5, name: "Geshka" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Yo" },
        { id: 4, message: "How is ur homework?" },
        { id: 5, message: "I dont rly know..." },
        { id: 6, message: "lol" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("уведомили...");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);

    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newText: text,
  };
};

export const sendNewMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;
window.store = store;
