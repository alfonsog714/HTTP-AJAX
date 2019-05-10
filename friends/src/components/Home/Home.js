import React from "react";
import "./Home.css";

const Home = props => {
  const routeToFriends = e => {
    e.preventDefault();
    props.history.push("/friends");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-banner"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1280px-Friends_logo.svg.png"
      />
      <button onClick={routeToFriends}>Friends List</button>
    </div>
  );
};

export default Home;
