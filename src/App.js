import React, { Component } from "react";
import "./App.scss";
import NavBar from "./components/Navigation/NavBar/NavBar";
import Banner from "./components/UI/Banner/Banner";
import TextDescription from "./containers/Info/TextDescription/TextDescription";
import Services from "./containers/Services/Services";
import Footer from "./components/UI/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Banner />
        </header>
        <TextDescription />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default App;
