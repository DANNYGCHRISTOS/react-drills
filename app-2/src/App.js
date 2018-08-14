import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ["Cheese", "Sushi", "Chicken"]
    };
  }
  render() {
    return (
      <div>
        {this.state.array.map(array => (
          <ul>
            <li key={array}>
              <h2>{array}</h2>{" "}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
