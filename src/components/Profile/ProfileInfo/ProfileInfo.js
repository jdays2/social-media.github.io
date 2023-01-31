import Preloader from "../../commands/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import standartAvatar from "./../../../assets/images/standart-avatar.png";

function ProfileInfo(props) {
  return (
    <div className={s.cont}>
      <img
        src="https://oir.mobi/uploads/posts/2021-03/1616601614_22-p-fon-kosmos-zvezdi-28.jpg"
        className={s.backgroundImg}
      />
      <div className={s.discriptionBlock}>
        <img
          src="#
          "
          className={s.profileAvatar}
        />
        <div className={s.userName}>{props.profile.profile.fullName} </div>

        <div className={s.userAbout}>{props.profile.profile.aboutMe} </div>
      </div>
    </div>
  );

  // <div className={s.cont}>
  //   <img src="https://oir.mobi/uploads/posts/2021-03/1616601614_22-p-fon-kosmos-zvezdi-28.jpg" />

  //   <div className={s.discriptionBlock}>
  //     <img src={props.profile.photos.small} />
  //
  //   </div>
  // </div>
}

export default ProfileInfo;
