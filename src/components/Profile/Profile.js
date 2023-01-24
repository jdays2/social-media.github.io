import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ state, addPost, updateNewPostText }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
}

export default Profile;
