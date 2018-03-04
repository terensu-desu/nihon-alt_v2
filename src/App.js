import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Materials from "./components/Materials/Materials";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Route exact path="/" component={Home} />
        <Route path="/pages/:section/:unit" component={Materials} />
      </Router>
    );
  }
}

export default App;