import React from "react";
import "./Users.css";

const Users = props => {
  var usersData = "";
  if (props.data !== null) {
    usersData = props.data.map(data => {
      return (
        <tr>
          <td className="text-center">
            <a href="/" onClick={e => props.onClickUser(e, data.userId)}>
              {data.userId}
            </a>
          </td>
          <td className="text-center">
            <a href="/" onClick={e => props.onClickPost(e, data.id)}>
              {data.id}
            </a>
          </td>
          <td>{data.title}</td>
          <td>{data.body}</td>
        </tr>
      );
    });
  }

  return (
    <div className="container border border-primary span mt-3 pl-0 pr-0">
      <table className="table table-bordered table-sm table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              UserId
            </th>
            <th scope="col" className="text-center">
              PostId
            </th>
            <th scope="col" className="text-center">
              Title
            </th>
            <th scope="col" className="text-center">
              Body
            </th>
          </tr>
        </thead>
        <tbody>{usersData}</tbody>
      </table>
    </div>
  );
};

export default Users;
