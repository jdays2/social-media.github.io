import classes from "./Profile.module.css";

function Profile() {
  return (
    <div className={classes.cont}>
      <img src="https://physics.aps.org/assets/c99fca7b-79ac-45e8-9730-822c7e2d37a8/e20_2.png" />

      <div>
        ava+discr
        <div>
          my post
          <div>new post</div>
          <div className={classes.posts}>
            <div className={classes.item}>post1</div>
            <div className={classes.item}>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
