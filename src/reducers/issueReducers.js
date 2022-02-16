import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_FAIL,
  GET_ISSUES_SUCCESS,
} from "../constants";

export const getAllIssues = (state = { issues: {} }, action) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        loading: true,
      };
    case GET_ISSUES_SUCCESS:
      return {
        loading: false,
        issues: action.payload,
      };
    case GET_ISSUES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
