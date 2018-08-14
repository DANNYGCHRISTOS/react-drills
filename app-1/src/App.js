import React, { Component } from "react";
import TextValue from "./conmponents/TextValue";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ textInput: value });
  }

  render() {
    return (
      <div className="TextValue">
        <TextValue
          handleChange={this.handleChange}
          textInput={this.state.textInput}
        />
      </div>
    );
  }
}

export default App;
