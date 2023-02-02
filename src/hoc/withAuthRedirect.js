import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      return this.props.isLogin ? (
        <Component {...this.props} />
      ) : (
        <Navigate to="/login" />
      );
    }
  }

  return RedirectComponent;
};
