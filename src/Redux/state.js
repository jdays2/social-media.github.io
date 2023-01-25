const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.messagePage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 10,
        message: this._state.messagePage.newMessageText,
      };
      this._state.messagePage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
      this._state.messagePage.newMessageText = "";
    }
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
