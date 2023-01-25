import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/state";

function MyPosts({ state, dispatch }) {
  let newPostArea = React.createRef();

  let onPostChange = () => {
    let text = newPostArea.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  return (
    <div className={s.postBlock}>
      my post
      <div>new post</div>
      <div>
        <div>
          <textarea
            ref={newPostArea}
            value={state.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add new post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {state.postsData.map((post) => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  );
}

export default MyPosts;
