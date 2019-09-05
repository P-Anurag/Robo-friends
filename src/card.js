import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div>
        <img alt="Robo pic" src="https://robohash.org/test?200x200" />
        <div>
          <h1>Jane Doe</h1>
          <p>jane.doe@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Card;
