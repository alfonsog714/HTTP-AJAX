import React from "react";

import "./Friend.css";

const Friend = props => {
  const updateForm = e => {
    e.preventDefault();
    props.updateForm(props.friend);
  };

  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(props.friend.id);
  };

  return (
    <div className="friend-card">
      <h3 className="friend-name">{props.friend.name}</h3>
      <ul className="friend-desc">
        <li className="friend-age">Age: {props.friend.age}</li>
        <li className="friend-email">Email: {props.friend.email}</li>
      </ul>

      <div className="buttons">
        <button onClick={updateForm}>Update</button>
        <button onClick={deleteFriend}>Delete</button>
      </div>
    </div>
  );
};

export default Friend;
