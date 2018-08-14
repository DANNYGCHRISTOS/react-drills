import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      subjects: ["Javascript", "C++", "Java", "Micro-C", "C#"],
      filterString: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let subjectsToDisplay = this.state.subjects
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {subjectsToDisplay}
      </div>
    );
  }
}

export default App;
