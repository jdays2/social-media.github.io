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
import { usersAPI } from "../../DAL/api";

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

    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.setToggleIsFetchingAC(false);
        this.props.setUsersAC(data.items);
      });
  }

  onChangedPage = (pageNumber) => {
    this.props.setToggleIsFetchingAC(true);
    this.props.setCurrentPageAC(pageNumber);

    usersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.setToggleIsFetchingAC(false);
      this.props.setUsersAC(data.items);
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
