import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({ store, dispatch }) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store.profilePage} dispatch={dispatch} />
    </div>
  );
}

export default Profile;
