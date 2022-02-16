import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import {
//   userLogin,
//   userRegister,
//   userDetails,
//   userList,
//   userUpdateProfile,
// } from "./reducers/userReducers";

import { getAllIssues } from "./reducers/issueReducers";
import { getRepo } from "./reducers/repoReducers";

const reducers = combineReducers({ getAllIssues, getRepo });

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
