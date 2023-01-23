import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ postsData }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
}

export default Profile;
