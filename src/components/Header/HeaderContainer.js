import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthTC } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthTC();
  }

  render() {
    return <Header data={{ ...this.props }} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { getAuthTC })(HeaderContainer);
