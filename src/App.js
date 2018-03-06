import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Aux from "./hoc/Aux";
import Home from "./containers/Home/Home";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Materials from "./components/Materials/Materials";

class App extends Component {
  render() {
    return (
      <Router className="App">
      	<Aux>
		    	<Navbar />
		    	<Banner />
	      	<Switch>
		        <Route path="/pages/:section/:unit" component={Materials} />
		        <Route exact path="/" component={Home} />
	      	</Switch>
      	</Aux>
      </Router>
    );
  }
}

export default App;