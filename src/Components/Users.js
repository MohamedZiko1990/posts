import React from "react";

const Users = props => {
  var usersData = "";
  if (props.data !== null) {
    usersData = props.data.map(data => {
      return (
        <tr>
          <td>{data.userId}</td>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.title}</td>
          <td>{data.body}</td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <table className="table table-bordered table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">user id</th>
            <th scope="col">id</th>
            <th scope="col">post</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>{usersData}</tbody>
      </table>
    </div>
  );
};

export default Users;
