import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../Redux/usersPageReducer";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    unfollowUser: (userId) => {
      dispatch(unfollowAC(userId));
    },
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
