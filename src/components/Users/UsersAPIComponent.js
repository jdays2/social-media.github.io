import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  }

  onChangedPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  };

  render() {
    return (
      <Users
        onChangedPage={this.onChangedPage}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
      />
    );
  }
}

export default UsersAPIComponent;
