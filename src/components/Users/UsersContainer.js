import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
} from "../../Redux/usersPageReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unfollowUser: (userId) => {
      dispatch(unfollowAC(userId));
    },
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
  };
};

class UsersContainer extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
