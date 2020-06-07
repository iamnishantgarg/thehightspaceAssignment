// import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchUsers = (users) => {
  return {
    type: "FETCH_USERS",
    users,
  };
};

export const fetchUserAddress = (userid, userAddresses) => {
  return {
    type: "FETCH_ADDRESS",
    user: {
      _id: userid,
      addresses: userAddresses,
    },
  };
};

export const showError = (error) => {
  return {
    type: "ERROR_DISPLAY",
    error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchUsers(res.data.users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showError(err));
      });
  };
};

export const getUserAddress = (userid) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/${userid}`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchUserAddress(userid, res.data.addresses));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showError(err));
      });
  };
};
