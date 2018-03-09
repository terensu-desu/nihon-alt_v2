import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import Aux from "../../hoc/Aux";

class Sidenav extends Component {
	componentDidMount() {
		const options = {coverTrigger: false};
		M.Dropdown.init(this.jhs1TriggerM, options);
		M.Dropdown.init(this.jhs2TriggerM, options);
		M.Dropdown.init(this.jhs3TriggerM, options);
		M.Dropdown.init(this.hsTriggerM, options);
		M.Dropdown.init(this.snesTriggerM, options);
	}

	render() {
		let logout = "";
		if(this.props.isAuth) {
			logout = <li><a onClick={this.props.onLogout}>Logout</a></li>;
		}
		return (
			<Aux>
				<li>
					<a
						ref={(jhs1TriggerM) => {this.jhs1TriggerM = jhs1TriggerM}}
						className="dropdown-trigger" 
						data-target="jhs1DropdownM">
							Jr. High Year 1
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(jhs2TriggerM) => {this.jhs2TriggerM = jhs2TriggerM}}
						className="dropdown-trigger" 
						data-target="jhs2DropdownM">
							Jr. High Year 2
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(jhs3TriggerM) => {this.jhs3TriggerM = jhs3TriggerM}}
						className="dropdown-trigger" 
						data-target="jhs3DropdownM">
							Jr. High Year 3
							<i className="material-icons right"><span>arrow_drop_down</span></i>
					</a>
				</li>
				<li>
					<a
						ref={(snesTriggerM) => {this.snesTriggerM = snesTriggerM}}
						className="dropdown-trigger" 
						data-target="snesDropdownM">
							Special Needs / ES
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
				<div>{logout}</div>
				<ul id="jhs1DropdownM" className="dropdown-content">
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit7/part1">Unit 7</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit8/part1">Unit 8</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit9/part1">Unit 9</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit10/part1">Unit 10</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unit11/part1">Unit 11</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear1/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="jhs2DropdownM" className="dropdown-content">
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unit7/part1">Unit 7</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear2/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="jhs3DropdownM" className="dropdown-content">
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/jhsyear3/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="snesDropdownM" className="dropdown-content">
				  <li><NavLink className="sidenav-close" to="/pages/snes">Activities</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/snes">Games</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/snes">Songs</NavLink></li>
				</ul>
				<ul id="hsDropdownM" className="dropdown-content">
				  <li><NavLink className="sidenav-close" to="/pages/hs">Activities</NavLink></li>
				  <li><NavLink className="sidenav-close" to="/pages/hs">Games</NavLink></li>
				</ul>
			</Aux>
		)
	}
}

export default Sidenav;