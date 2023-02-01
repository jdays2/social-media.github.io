import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getProfileTC } from "../../Redux/usersPageReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    this.props.getProfileTC(userId);
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

export default connect(mapStateToProps, { getProfileTC })(
  withRouter(ProfileContainer)
);
