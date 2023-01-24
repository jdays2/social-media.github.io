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
    },
  },
  _callSubscriber() {
    console.log("уведомили...");
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._callSubscriber(this._state);
    this._state.profilePage.newPostText = "";
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
