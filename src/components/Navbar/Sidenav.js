import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import Aux from "../../hoc/Aux";

class Sidenav extends Component {
	componentDidMount() {
		const options = {coverTrigger: false};
		M.Dropdown.init(this.esTriggerM, options);
		M.Dropdown.init(this.jhsTriggerM, options);
		M.Dropdown.init(this.hsTriggerM, options);
		M.Dropdown.init(this.snTriggerM, options);
	}

	render() {
		return (
			<Aux>
				<li>
					<a 
						ref={(esTriggerM) => {this.esTriggerM = esTriggerM}}
						className="dropdown-trigger" 
						data-target="esDropdownM">
							Elementary School
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(jhsTriggerM) => {this.jhsTriggerM = jhsTriggerM}}
						className="dropdown-trigger" 
						data-target="jhsDropdownM">
							Jr. High School
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(snTriggerM) => {this.snTriggerM = snTriggerM}}
						className="dropdown-trigger" 
						data-target="snDropdownM">
							Special Needs
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(hsTriggerM) => {this.hsTriggerM = hsTriggerM}}
						className="dropdown-trigger" 
						data-target="hsDropdownM">
							High School
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<ul id="esDropdownM" className="dropdown-content">
				  <li><NavLink to="/es">Activities</NavLink></li>
				  <li><NavLink to="/es">Games</NavLink></li>
				  <li><NavLink to="/es">Songs</NavLink></li>
				</ul>
				<ul id="jhsDropdownM" className="dropdown-content">
				  <li><NavLink to="/jhs">Unit 1</NavLink></li>
				  <li><NavLink to="/jhs">Unit 2</NavLink></li>
				  <li><NavLink to="/jhs">Unit 3</NavLink></li>
				  <li><NavLink to="/jhs">Unit 4</NavLink></li>
				  <li><NavLink to="/jhs">Unit 5</NavLink></li>
				  <li><NavLink to="/jhs">Unit 6</NavLink></li>
				  <li><NavLink to="/jhs">Unit 7</NavLink></li>
				  <li><NavLink to="/jhs">Unit 8</NavLink></li>
				  <li><NavLink to="/jhs">Unit 9</NavLink></li>
				  <li><NavLink to="/jhs">Unit 10</NavLink></li>
				  <li><NavLink to="/jhs">Unit 11</NavLink></li>
				  <li><NavLink to="/jhs">Extras</NavLink></li>
				</ul>
				<ul id="snDropdownM" className="dropdown-content">
				  <li><NavLink to="/sn">Activities</NavLink></li>
				  <li><NavLink to="/sn">Games</NavLink></li>
				  <li><NavLink to="/sn">Songs</NavLink></li>
				</ul>
				<ul id="hsDropdownM" className="dropdown-content">
				  <li><NavLink to="/hs">Activities</NavLink></li>
				  <li><NavLink to="/hs">Games</NavLink></li>
				</ul>
			</Aux>
		)
	}
}

export default Sidenav;