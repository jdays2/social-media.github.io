import axios from "axios";
import s from "./Users.module.css";
function Users({ users, followUser, unfollowUser, setUsers }) {
  if (users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => setUsers(response.data.items));
  }
  console.log(users);
  return (
    <div className={s.wrapper}>
      {users.map((u) => {
        return (
          <div className={s.userCard}>
            <span>
              <div className={s.userLogo}>
                <img
                  className={s.img}
                  src={
                    u.photos.small === null
                      ? "https://mustact.by/img/empty/artist.avatar.png"
                      : u.photos.small
                  }
                />

                {u.followed ? (
                  <button
                    onClick={() => {
                      unfollowUser(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      followUser(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
