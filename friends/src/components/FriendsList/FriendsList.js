import React from "react";
import Friend from "./Friend";

import "./FriendsList.css";

const FriendsList = props => {
  return (
    <div className="friends-container">
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          updateForm={props.setUpdateForm}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
};

export default FriendsList;
