import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts({ posts, addPost, updateNewPostText, newPostText }) {
  let newPostArea = React.createRef();

  let onPostChange = () => {
    let text = newPostArea.current.value;
    updateNewPostText(text);
  };

  let onAddPost = () => {
    addPost();
  };

  return (
    <div className={s.postBlock}>
      my post
      <div>new post</div>
      <div>
        <div>
          <textarea
            ref={newPostArea}
            value={newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add new post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {posts.map((post) => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  );
}

export default MyPosts;
