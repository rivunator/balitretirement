import React, { Component } from "react";
import "./App.scss";
import NavBar from "./components/Navigation/NavBar/NavBar";
import Banner from "./components/UI/Banner/Banner";
import TextDescription from "./containers/Info/TextDescription/TextDescription";
import ServiceItems from "./components/UI/ServiceItems/ServiceItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Banner />
          <TextDescription />
          <ServiceItems />
        </header>
      </div>
    );
  }
}

export default App;
