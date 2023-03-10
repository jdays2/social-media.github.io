export const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return { ...state, newMessageText: action.newText };

    case SEND_MESSAGE: {
      let newMessage = {
        id: 10,
        message: state.newMessageText,
      };

      let stateCopy = {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };

      return stateCopy;
    }
    default:
      return {
        ...state,
      };
  }
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

export default messageReducer;
