import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profilePageReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPost: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default myPostsContainer;
