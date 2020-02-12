import React, { Component } from "react";

import { connect } from "react-redux";
import propTypes from "prop-types";
import { getLeads } from "../../actions/leads";

class Leads extends Component {
  componentDidMount() {
    this.props.getLeads;
  }
  static propTypes = {
    leads: propTypes.array.isRequired
  };
  render() {
    return <h1>Leads list</h1>;
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(Leads);
