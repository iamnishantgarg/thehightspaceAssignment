import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchUsers = (users) => {
  return {
    type: actionTypes.FETCH_USERS,
    users,
  };
};

export const fetchUserAddress = (userid, userAddresses) => {
  return {
    type: actionTypes.FETCH_ADDRESS,
    user: {
      _id: userid,
      addresses: userAddresses,
    },
  };
};

export const showError = (error) => {
  return {
    type: actionTypes.ERROR_DISPLAY,
    error,
  };
};

export const getUsers = () => {
  return (dispatch) => {};
};

export const getUserAddress = (userid) => {
  return (dispatch) => {};
};
