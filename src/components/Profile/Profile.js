import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ state, dispatch }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={state} dispatch={dispatch} />
    </div>
  );
}

export default Profile;
