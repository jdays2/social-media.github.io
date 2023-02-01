import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../Redux/usersPageReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../DAL/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;

    usersAPI.getProfile(userId).then((response) => {
      this.props.setUserProfileAC(response.data);
    });
    console.log(this.props);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.usersPage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfileAC })(
  withRouter(ProfileContainer)
);
