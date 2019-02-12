import React, { Component } from "react";

//import "./App.css";
import NavBar from "./components/Navigation/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <br />
          <p />
        </header>
      </div>
    );
  }
}

export default App;
