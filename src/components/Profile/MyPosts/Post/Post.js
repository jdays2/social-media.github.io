import s from "./Post.module.css";

function Post({ message, likeCount }) {
  return (
    <div className={s.item}>
      <img src="https://sun9-79.userapi.com/impf/tZBwsF8isZGmfzgMzLr1QKFiJq_evqYqKrabtA/RThBBVQaRwg.jpg?size=1088x927&quality=96&sign=a7d5abded32ce0cbeba9a4949fa69032&type=album"></img>
      {message}
      <div>
        <span>Like: {likeCount}</span>
      </div>
    </div>
  );
}

export default Post;
