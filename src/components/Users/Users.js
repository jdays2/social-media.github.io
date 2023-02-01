import { NavLink } from "react-router-dom";
import s from "./Users.module.css";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];

  for (let i = 1; pagesCount >= i; i++) {
    pages.push(i);
  }
  return (
    <div className={s.wrapper}>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onChangedPage(p);
              }}
              className={props.currentPage === p ? s.current : null}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => {
        return (
          <div className={s.userCard}>
            <span>
              <div className={s.userLogo}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    className={s.img}
                    src={
                      u.photos.small === null
                        ? "https://mustact.by/img/empty/artist.avatar.png"
                        : u.photos.small
                    }
                  />
                </NavLink>

                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
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
