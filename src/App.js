import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Issues from "./components/Issues";
import TopHeadline from "./components/TopHeadline";
import IssueMainPage from "./components/IssueMainPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IssueMainPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
