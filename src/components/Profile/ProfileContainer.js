import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/usersPageReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfileAC(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.usersPage.profile,
});

export default connect(mapStateToProps, { setUserProfileAC })(ProfileContainer);
