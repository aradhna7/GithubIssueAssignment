import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const ListIssues = (issue) => {
  return (
    <tr>
      <td>issue.title</td>
      <td>
        {issue.labels &&
          issue.labels.map((l) => {
            return (
              <Badge
                pill
                // bg="light"
                text="dark"
                style={{ backgroundColor: `${l.color}` }}
              >
                {l.name}
                {l.color}
              </Badge>
            );
          })}
      </td>
      <td>
        #{issue.number} opened by {issue.user.login}
      </td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
};

export default ListIssues;
