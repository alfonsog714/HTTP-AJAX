import React from "react";

class UpdateForm extends React.Component {
  state = {
    friend: this.props.activeFriend
  };

  changeHandler = e => {
    e.persist();
    const name = e.target.name;
    let value = e.target.value;

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
  };

  render() {
    return (
      <div>
        <h2>Update Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={this.changeHandler}
            value={this.state.friend.name}
          />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age.."
            value={this.state.friend.age}
          />

          <input
            type="email"
            placeholder="email@email.com ..."
            onChange={this.changeHandler}
            name="email"
            value={this.state.friend.email}
          />

          <button>Update Friend</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
