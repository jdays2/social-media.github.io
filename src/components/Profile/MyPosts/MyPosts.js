import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts({ state, dispatch }) {
  let newPostArea = React.createRef();

  let onPostChange = () => {
    let text = newPostArea.current.value;
    console.log(text);
    dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  let addPost = () => {
    dispatch({ type: "ADD-POST" });
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
