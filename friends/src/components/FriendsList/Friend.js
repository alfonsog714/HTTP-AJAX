import React from "react";

import "./Friend.css";

const Friend = props => {
  return (
    <div className="friend-card">
      <h3 className="friend-name">{props.friend.name}</h3>
      <ul className="friend-desc">
        <li className="friend-age">Age: {props.friend.age}</li>
        <li className="friend-email">Email: {props.friend.email}</li>
      </ul>
    </div>
  );
};

export default Friend;
