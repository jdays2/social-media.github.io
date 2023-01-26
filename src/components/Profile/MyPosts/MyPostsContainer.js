import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profilePageReducer";

function MyPostsContainer({ dispatch, store }) {
  let onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={store.postsData}
      newPostText={store.newPostText}
    />
  );
}

export default MyPostsContainer;
