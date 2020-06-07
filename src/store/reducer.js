// import * as actionTypes from "./actionTypes";
const initialState = {
  users: null,
  currentUser: null,
  currentAddresses: null,
  error: null,
  fetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: [...action.users],
      };
    case "FETCH_ADDRESS":
      return {
        ...state,
        currentUser: action.user._id,
        currentAddresses: action.user.addresses,
        fetching: false,
      };
    case "ERROR_DISPLAY":
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    case "FETCH_START":
      return {
        ...state,
        fetching: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
