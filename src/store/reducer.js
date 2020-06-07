// import * as actionTypes from "./actionTypes";
const initialState = {
  users: null,
  currentUser: null,
  currentAddresses: null,
  error: null,
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
      };
    case "ERROR_DISPLAY":
      return {
        ...state,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
