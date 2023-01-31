import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import axios from "axios";

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
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "33a745ec-83ff-4e8d-a4c7-4841cc",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "33a745ec-83ff-4e8d-a4c7-4841cc",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
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
