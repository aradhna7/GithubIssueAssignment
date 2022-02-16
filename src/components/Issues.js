import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssues } from "../actions/issueActions";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import TopHeadline from "./TopHeadline";
import Header from "./Header";

const ListIssues = (issue, id) => {
  return (
    <tr>
      <td colSpan={1} style={{ textAlign: "right" }}>
        <i class="bi bi-record-circle mr-3" style={{ color: "green" }}></i>{" "}
      </td>
      <td colSpan={10}>
        <h4 className="issue-title">
          {issue.title}{" "}
          {issue.labels &&
            issue.labels.map((l) => {
              return (
                <Badge
                  pill
                  bg={`#${l.color}`}
                  // text="dark"
                  style={{ backgroundColor: `#${l.color}`, marginRight: "2px" }}
                >
                  {l.name}
                </Badge>
              );
            })}
        </h4>
        <span className="text-small">
          #{issue.number} opened by {issue.user.login}
        </span>
      </td>
      {issue.comments > 0 ? (
        <td colSpan={1}>
          <i class="bi bi-chat-left mr-4" style={{ fontSize: "13px" }}></i>{" "}
          <i class="fa fa-solid fa-code-pull-request"></i>
          {issue.comments}
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
};

const Issues = () => {
  const [pageNo, setPageNo] = useState(1);

  const [list, setList] = useState([]);

  const dispatch = useDispatch();
  const listofissues = useSelector((state) => state.getAllIssues);

  const { issues, loading } = listofissues;

  // const getData = () => {
  //   dispatch(getIssues(pageNo));

  //   console.log(issues);
  //   console.log(list);

  //   if (pageNo > 2) {
  //     setList((list) => [...list, ...issues]);
  //   } else {
  //     setList(issues);
  //   }

  //   setPageNo(pageNo + 1);
  // };

  function getData() {
    axios
      .get(
        `https://api.github.com/repos/facebook/create-react-app/issues?page=${pageNo}&per_page=50`
      )
      .then((response) => {
        if (pageNo > 1) {
          let arr = [...list, ...response.data];

          setList(arr);
        } else {
          setList(response.data);
        }
      })
      .catch((error) => {
        alert("Axios GET request failed");
      });
  }

  console.log(issues);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(list);
  // }, [issues]);

  // console.log(list);

  const firstEvent = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    console.log(bottom);
    if (bottom) {
      let pg = pageNo + 1;
      setPageNo(pg);
      getData();
    }
  };

  return (
    <div onScroll={firstEvent} className="scroll-container">
      <div className="container">
        {list && list.length && (
          <Table table table-bordered vertical horizontal hover>
            <thead>
              <tr>
                <th colSpan={1} style={{ textAlign: "right" }}>
                  <i class="bi bi-record-circle mr-3"></i>{" "}
                </th>
                <th colSpan={10}>
                  Open
                  <i
                    class="bi bi-check2 "
                    style={{ marginLeft: "10px" }}
                  ></i>{" "}
                  Closed
                </th>
                <th>
                  Author<i class="bi bi-caret-down-fill"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((issue, id) => {
                return ListIssues(issue, id);
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Issues;
