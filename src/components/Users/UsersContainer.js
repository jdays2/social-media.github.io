import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../Redux/usersPageReducer";

const mapStateToProps = (state) => {
  return {
    // users: state.usersPage.users,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
