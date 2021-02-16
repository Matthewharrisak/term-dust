import React, { Component } from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Shows from "./Components/Shows/Shows";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing id="landing" />
        <About id="about" />
        <Shows id="shows" />
        <Contact id="contact" />
      </div>
    );
  }
}

export default App;
