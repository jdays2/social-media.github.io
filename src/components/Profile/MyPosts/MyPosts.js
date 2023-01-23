import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts({ state }) {
  let newPostArea = React.createRef();

  let addNewPost = () => {
    alert(newPostArea.current.value);
  };

  return (
    <div className={s.postBlock}>
      my post
      <div>new post</div>
      <div>
        <div>
          <textarea ref={newPostArea}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add new post</button>
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
