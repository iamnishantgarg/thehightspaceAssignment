import React, { Component } from "react";

import { connect } from "react-redux";
import Address from "../Address/Address";

class Addressbox extends Component {
  render() {
    let addresses = null;
    if (this.props.fetching) addresses = <p>fetching</p>;
    if (this.props.addresses) {
      addresses = this.props.addresses.map((address, i) => {
        return <Address key={i}>{address}</Address>;
      });
    }
    return <div>{addresses}</div>;
  }
}
const mapPropsToState = (state) => {
  return {
    addresses: state.currentAddresses,
    fetching: state.fetching,
  };
};
export default connect(mapPropsToState)(Addressbox);
