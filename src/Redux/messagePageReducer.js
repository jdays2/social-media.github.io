export const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const messageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: 10,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);

      state.newMessageText = "";

      return state;
    default:
      return state;
  }
};

export default messageReducer;
