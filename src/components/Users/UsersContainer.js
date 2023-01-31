import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setToggleIsFetchingAC,
} from "../../Redux/usersPageReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

import Preloader from "./../commands/Preloader/Preloader";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetchingAC(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setToggleIsFetchingAC(false);
        this.props.setUsersAC(response.data.items);
      });
  }

  onChangedPage = (pageNumber) => {
    this.props.setToggleIsFetchingAC(true);
    this.props.setCurrentPageAC(pageNumber);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setToggleIsFetchingAC(false);
        console.log(this.props.isFetching);
        this.props.setUsersAC(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onChangedPage={this.onChangedPage}
          unfollow={this.props.unfollowAC}
          follow={this.props.followAC}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {
  unfollowAC,
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setToggleIsFetchingAC,
})(UsersContainer);
