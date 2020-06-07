import React, { Component } from "react";
import { connect } from "react-redux";
import "./Userbox.css";
import User from "../User/User";

import * as actions from "../../store/actions";
class Userbox extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    let display = <p>Loading</p>;
    if (this.props.users) {
      let users = this.props.users.map((user) => {
        return <User key={user._id} user={user} />;
      });
      display = (
        <div>
          <table className="Table">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </table>
        </div>
      );
    }
    // let users = "hello";
    return <div className="Userbox">{display}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(actions.getUsers()),
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Userbox);
