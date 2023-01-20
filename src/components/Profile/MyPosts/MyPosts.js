import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      my post
      <div>new post</div>
      <div>
        <textarea></textarea>
        <button>Add new post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}></div>
      <Post message="Сегодня у меня очень продуктивный день!" />
      <Post message="Я сходил по врачам, что давно хотел сделать и поменял постель." />
      <Post message="Только проснулся..." />
    </div>
  );
}

export default MyPosts;
