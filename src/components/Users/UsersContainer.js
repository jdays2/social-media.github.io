import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setCurrentPageAC,
  setToggleFollowingInProgressAC,
  getUsersTC,
  unfollowTC,
  followTC,
} from "../../Redux/usersPageReducer";
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.pageSize, this.props.currentPage);
  }

  onChangedPage = (pageNumber) => {
    this.props.setCurrentPageAC(pageNumber);
    this.props.getUsersTC(pageNumber, this.props.currentPage);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onChangedPage={this.onChangedPage}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          setToggleFollowingInProgress={
            this.props.setToggleFollowingInProgressAC
          }
          followingInProgress={this.props.followingInProgress}
          unfollow={this.props.unfollowTC}
          follow={this.props.followTC}
        />
      </>
    );
    debugger;
  }
}

export default connect(mapStateToProps, {
  unfollowAC,
  followAC,
  setCurrentPageAC,
  setToggleFollowingInProgressAC,
  getUsersTC,
  unfollowTC,
  followTC,
})(UsersContainer);
