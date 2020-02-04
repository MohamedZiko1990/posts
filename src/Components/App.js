import React from "react";
import Users from "./Users";
import axios from "axios";

class App extends React.Component {
  state = { usersData: null };

  componentDidMount = () => {
    const a = axios.get(" https://jsonplaceholder.typicode.com/posts").then(
      response => {
        console.log(response.data);
        this.setState({ usersData: response.data });
      },
      error => {
        console.log(error);
      }
    );
  };

  onClickUserId = () => {
    console.log("clicked user id");
  };

  onClickPostId = () => {
    console.log("clicked post id");
  };

  render() {
    return (
      <div>
        <Users
          data={this.state.usersData}
          onClickUser={this.onClickUserId}
          onClickPost={this.onClickPostId}
        />
      </div>
    );
  }
}

export default App;
