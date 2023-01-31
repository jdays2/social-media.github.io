import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserDataAC } from "../../Redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserDataAC(id, login, email);
          console.log(id, login, email);
        }
      });
  }
  render() {
    return <Header />;
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { setUserDataAC })(HeaderContainer);
