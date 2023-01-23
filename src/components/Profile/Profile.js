import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ state, addPost }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={state} addPost={addPost} />
    </div>
  );
}

export default Profile;
