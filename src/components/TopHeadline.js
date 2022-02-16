import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Badge from "react-bootstrap/Badge";
import Header from "./Header";
import Issues from "./Issues";
import { getRepoInfo } from "../actions/repoAction";

const TopHeadline = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const repoinfo = useSelector((state) => state.getRepo);

  const { repo, loading } = repoinfo;

  useEffect(() => {
    dispatch(getRepoInfo());
  }, []);

  useEffect(() => {
    setData(repo);
  }, [repo, loading]);

  return (
    <div className="pt-4" style={{ backgroundColor: "#f6f8fa" }}>
      <div className="container">
        <div className="col-12 row">
          <div className="col-6" style={{ textAlign: "left" }}>
            <h5 style={{ color: "#2e6fda" }}>facebook/ create-react-app</h5>
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            <Button
              variant="outline-secondary"
              onClick={() =>
                setData({
                  ...data,
                  subscribers_count: data.subscribers_count + 1,
                })
              }
            >
              Watch{" "}
              <Badge pill bg="light" text="dark">
                {data &&
                  (data.subscribers_count > 1000
                    ? (data.subscribers_count / 1000).toFixed(1) + "k"
                    : data.subscribers_count)}
              </Badge>{" "}
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() =>
                setData({
                  ...data,
                  forks_count: data.forks_count + 1,
                })
              }
            >
              Fork{" "}
              <Badge pill bg="light" text="dark">
                {data &&
                  (data.forks_count > 1000
                    ? (data.forks_count / 1000).toFixed(1) + "k"
                    : data.forks_count)}
              </Badge>{" "}
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() =>
                setData({
                  ...data,
                  stargazers_count: data.stargazers_count + 1,
                })
              }
            >
              Star{" "}
              <Badge pill bg="light" text="dark">
                {data &&
                  (data.stargazers_count > 1000
                    ? (data.stargazers_count / 1000).toFixed(1) + "k"
                    : data.stargazers_count)}
              </Badge>{" "}
            </Button>{" "}
          </div>
        </div>

        <div className="mt-4 row" style={{ textAlign: "left" }}>
          <Tabs
            defaultActiveKey="Issues"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Code" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Issues" title="Issues" defaultChecked>
              <Issues />
            </Tab>
            <Tab eventKey="Pull Requests" title="Pull Requests" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Decisions" title="Decisions" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Actions" title="Actions" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Projects" title="Projects" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Security" title="Security" disabled>
              <Header />
            </Tab>
            <Tab eventKey="Insights" title="Insights" disabled>
              <Header />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TopHeadline;
