import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Aux from "./hoc/Aux";
import Materials from "./containers/Materials/Materials";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Aux>
          <Navbar />
          <Banner />
          <Switch>
            <Route path="/pages/:section/:unit/:part" component={Materials} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Aux>
      </Router>
    );
  }
}

export default App;
