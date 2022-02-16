import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
} from "../constants";
import axios from "axios";

export const getIssues = (pageNo) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ISSUES_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/create-react-app/issues?page=${pageNo}`,
      config
    );

    dispatch({
      type: GET_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ISSUES_FAIL,
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};
