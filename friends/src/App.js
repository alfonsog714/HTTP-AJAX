import React from "react";
import FriendsList from "./components/FriendsList/FriendsList";

import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>These are all your friends:</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
