import React from "react";
import "./Users.css";

const Users = props => {
  var usersData = "";
  if (props.data !== null) {
    usersData = props.data.map(data => {
      return (
        <tr>
          <td className="text-center">{data.userId}</td>
          <td className="text-center">{data.id}</td>
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
              user id
            </th>
            <th scope="col" className="text-center">
              Post id
            </th>
            <th scope="col" className="text-center">
              title
            </th>
            <th scope="col" className="text-center">
              body
            </th>
          </tr>
        </thead>
        <tbody>{usersData}</tbody>
      </table>
    </div>
  );
};

export default Users;
