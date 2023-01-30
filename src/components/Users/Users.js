import axios from "axios";
import React from "react";
import s from "./Users.module.css";

class Users extends React.Component {
  usersPageUpdate = () => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  };

  componentDidMount() {
    this.usersPageUpdate();
  }

  onChangedPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.usersPageUpdate();
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

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
                onClick={(p) => {
                  onChangedPage(p);
                }}
                className={this.props.currentPage === p && s.current}
              >
                {p}
              </span>
            );
          })}
        </div>

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
