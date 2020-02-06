import React from "react";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    usersData: null,
    postsData: null,
    commentsData: null,
    currentTable: null
  };

  componentDidMount = () => {
    axios.get(" https://jsonplaceholder.typicode.com/posts").then(
      response => {
        this.setState({ usersData: response.data });
      },
      error => {
        console.log(error);
      }
    );
  };

  onClickUserId = (event, userId) => {
    event.preventDefault();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(
        response => {
          this.setState({ postsData: response.data, currentTable: "Post" });
        },
        error => {
          console.log(error);
        }
      );
  };

  onClickPostId = (event, postId) => {
    event.preventDefault();
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(
        response => {
          this.setState({
            commentsData: response.data,
            currentTable: "Comment"
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="container">
        <div className="row pt-2">
          <h3>Posts Table:</h3>
          <Users
            data={this.state.usersData}
            onClickUser={this.onClickUserId}
            onClickPost={this.onClickPostId}
          />
        </div>
        {this.state.postsData !== null && this.state.currentTable === "Post" && (
          <div className="row pt-2">
            <h3>Posts/User Table:</h3>
            <Posts data={this.state.postsData} />
          </div>
        )}
        {this.state.commentsData !== null &&
          this.state.currentTable === "Comment" && (
            <div className="row pt-2">
              <h3>Comments/Post Table:</h3>
              <Comments data={this.state.commentsData} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
