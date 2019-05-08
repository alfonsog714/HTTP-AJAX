import React from "react";

const Friend = props => {
  return (
    <div>
      <h3>{props.friend.name}</h3>
      <ul>
        <li>Age: {props.friend.age}</li>
        <li>Email: {props.friend.email}</li>
      </ul>
    </div>
  );
};

export default Friend;
