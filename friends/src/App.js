import React from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home/Home";
import FriendsList from "./components/FriendsList/FriendsList";
import FriendForm from "./components/FriendForm/FriendForm";
import UpdateForm from "./components/UpdateForm/UpdateForm";

import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      activeFriend: null
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

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = friend => {
    this.setState({ activeFriend: friend });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home} />
        {/* <h1 className="friends-title">These are all your friends:</h1>
        <FriendsList friends={this.state.friends} /> */}

        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
              deleteFriend={this.deleteFriend}
            />
          )}
        />

        <Route
          exact
          path="/addfriend"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />

        <Route
          path="/update"
          render={props => (
            <UpdateForm
              {...props}
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
