import {
  GET_REPO_REQUEST,
  GET_REPO_FAIL,
  GET_REPO_SUCCESS,
} from "../constants";

export const getRepo = (state = { repo: {} }, action) => {
  switch (action.type) {
    case GET_REPO_REQUEST:
      return {
        loading: true,
      };
    case GET_REPO_SUCCESS:
      return {
        loading: false,
        repo: action.payload,
      };
    case GET_REPO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
