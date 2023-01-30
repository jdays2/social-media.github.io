import axios from "axios";
import React from "react";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div className={s.wrapper}>
        {this.props.users.map((u) => {
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
                        this.props.unfollowUser(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.followUser(u.id);
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
}

export default Users;
