import React from "react";
import "./Common.css";

const Comments = props => {
  var usersData = "";
  if (props.data !== null) {
    usersData = props.data.map(data => {
      return (
        <tr>
          <td className="text-center">{data.postId}</td>
          <td className="text-center">{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
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
              PostId
            </th>
            <th scope="col" className="text-center">
              Id
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              E-mail
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

export default Comments;
