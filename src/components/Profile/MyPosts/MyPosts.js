import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  let postsData = [
    { id: 1, message: "Hi! Thats my 1st post", likeCount: 12 },
    { id: 2, message: "Hi! Thats my 2st post", likeCount: 1 },
    { id: 3, message: "Hi! Thats my 3st post", likeCount: 2 },
    { id: 4, message: "Hi! Thats my 4st post", likeCount: 112 },
  ];

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
