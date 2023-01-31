import Preloader from "../../commands/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div className={s.cont}>
      <img src="https://oir.mobi/uploads/posts/2021-03/1616601614_22-p-fon-kosmos-zvezdi-28.jpg" />

      <div className={s.discriptionBlock}>
        <div>{props.profile.fullName} </div>
        <div>{props.profile.aboutMe} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
