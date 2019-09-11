import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchTab from "./SearchTab";

class App extends Component {
  state = {
    robots: robots,
    searchField: ""
  };

  onStateChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredArray = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robo-Friends</h1>
        <SearchTab onSearchChange={this.onStateChange} />
        <CardList robots={filteredArray} />
      </div>
    );
  }
}

export default App;
