import React, { Component } from "react";
import { connect } from "react-redux";
import Userbox from "./components/Userbox/Userbox";
import Addressbox from "./components/Addressbox/Addressbox";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Userbox />
        <Addressbox />
      </div>
    );
  }
}

export default App;
