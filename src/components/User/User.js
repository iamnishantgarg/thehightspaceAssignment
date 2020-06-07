import React, { Component } from "react";
import classes from "./User.module.css";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
class User extends Component {
  clickHandler = (event, userId) => {
    this.props.getAddress(userId);
  };
  render() {
    return (
      <tr
        onClick={(event) => this.clickHandler(event, this.props.user._id)}
        className={classes.User}
      >
        <td>{this.props.user._id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.sex}</td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAddress: (userId) => dispatch(actions.getUserAddress(userId)),
  };
};
export default connect(null, mapDispatchToProps)(User);
