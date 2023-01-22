import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div className={s.cont}>
      <img src="https://oir.mobi/uploads/posts/2021-03/1616601614_22-p-fon-kosmos-zvezdi-28.jpg" />
      <div className={s.discriptionBlock}>ava+discr</div>
    </div>
  );
}

export default ProfileInfo;
