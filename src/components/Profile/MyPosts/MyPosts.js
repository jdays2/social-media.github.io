import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts({ postsData }) {
  return (
    <div className={s.postBlock}>
      my post
      <div>new post</div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postsData.map((post) => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  );
}

export default MyPosts;
