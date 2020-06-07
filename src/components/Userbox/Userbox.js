import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../User/User";
import * as actions from "../../store/actions";
class Userbox extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    // let users = this.props.users.map((user) => {
    //   return <User key={user._id} user={user} />;
    // });
    let users = "hello";
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
            </tr>
          </thead>
        </table>
      </div>
    );
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
