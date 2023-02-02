import React from "react";
import {
  updateNewMessageActionCreator,
  sendNewMessageActionCreator,
} from "../../Redux/messagePageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialoges: state.messagePage.dialogesData,
    messages: state.messagePage.messagesData,
    newMessageText: state.messagePage.newMessageText,
    isLogin: state.auth.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendNewMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
  };
};

let authRedirect = withAuthRedirect(Dialogs);

const dialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(authRedirect);

export default dialogsContainer;
