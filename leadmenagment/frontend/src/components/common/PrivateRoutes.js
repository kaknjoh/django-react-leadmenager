import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => {
  auth: state.auth;
};
export default connect()(PrivateRoute);
