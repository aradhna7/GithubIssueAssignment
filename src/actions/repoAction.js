import {
  GET_REPO_REQUEST,
  GET_REPO_SUCCESS,
  GET_REPO_FAIL,
} from "../constants";
import axios from "axios";

export const getRepoInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_REPO_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/create-react-app`,

      config
    );

    dispatch({
      type: GET_REPO_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_REPO_FAIL,
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};
