import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserDataAC } from "../../Redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(``).then((response) => {
      setUserDataAC(response.data);
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
