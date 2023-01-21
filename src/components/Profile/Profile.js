import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={s.cont}>
      <img src="https://oir.mobi/uploads/posts/2021-03/1616601614_22-p-fon-kosmos-zvezdi-28.jpg" />

      <div>
        ava+discr
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
