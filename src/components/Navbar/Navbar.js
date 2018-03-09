import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css";

import Sidenav from "./Sidenav";
import * as actions from "../../store/actions/";

class Navbar extends Component {
	componentDidMount() {
		const options = {coverTrigger: false};
		M.Dropdown.init(this.jhs1Trigger, options);
		M.Dropdown.init(this.jhs2Trigger, options);
		M.Dropdown.init(this.jhs3Trigger, options);
		M.Dropdown.init(this.hsTrigger, options);
		M.Dropdown.init(this.snesTrigger, options);
		M.Sidenav.init(this.sidenav);
	}

	render() {
		let logout = null;
		if(this.props.isAuth) {
			logout = (
				<li><a onClick={this.props.onLogout}>Logout</a></li>
			);
		}
		return (
			<header>
				<nav>
					<div className="nav-wrapper">
						<a href="/" className="brand-logo">Nihon <span>ALT</span></a>
						<a data-target="mobile-sidebar" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a
									ref={(jhs1Trigger) => {this.jhs1Trigger = jhs1Trigger}}
									className="dropdown-trigger" 
									data-target="jhs1Dropdown">
										JHS Year 1
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(jhs2Trigger) => {this.jhs2Trigger = jhs2Trigger}}
									className="dropdown-trigger" 
									data-target="jhs2Dropdown">
										JHS Year 2
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(jhs3Trigger) => {this.jhs3Trigger = jhs3Trigger}}
									className="dropdown-trigger" 
									data-target="jhs3Dropdown">
										JHS Year 3
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(snesTrigger) => {this.snesTrigger = snesTrigger}}
									className="dropdown-trigger" 
									data-target="snesDropdown">
										Special Needs / ES
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(hsTrigger) => {this.hsTrigger = hsTrigger}}
									className="dropdown-trigger" 
									data-target="hsDropdown">
										High School
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							{logout}
						</ul>
					</div>
				</nav>
				<ul id="jhs1Dropdown" className="dropdown-content">
				  <li><NavLink to="/pages/jhsyear1/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit7/part1">Unit 7</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit8/part1">Unit 8</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit9/part1">Unit 9</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit10/part1">Unit 10</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unit11/part1">Unit 11</NavLink></li>
				  <li><NavLink to="/pages/jhsyear1/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="jhs2Dropdown" className="dropdown-content">
				  <li><NavLink to="/pages/jhsyear2/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unit7/part1">Unit 7</NavLink></li>
				  <li><NavLink to="/pages/jhsyear2/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="jhs3Dropdown" className="dropdown-content">
				  <li><NavLink to="/pages/jhsyear3/unit1/part1">Unit 1</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unit2/part1">Unit 2</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unit3/part1">Unit 3</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unit4/part1">Unit 4</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unit5/part1">Unit 5</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unit6/part1">Unit 6</NavLink></li>
				  <li><NavLink to="/pages/jhsyear3/unitex/part1">Extras</NavLink></li>
				</ul>
				<ul id="snesDropdown" className="dropdown-content">
				  <li><NavLink to="/pages/snes">Activities</NavLink></li>
				  <li><NavLink to="/pages/snes">Games</NavLink></li>
				  <li><NavLink to="/pages/snes">Songs</NavLink></li>
				</ul>
				<ul id="hsDropdown" className="dropdown-content">
				  <li><NavLink to="/pages/hs">Activities</NavLink></li>
				  <li><NavLink to="/pages/hs">Games</NavLink></li>
				</ul>
				<ul 
					ref={(sidenav) => {this.sidenav = sidenav}}
					className="sidenav" 
					id="mobile-sidebar">
					<h4 className="center">Nihon <span>ALT</span></h4>
					<Sidenav isAuth={this.props.isAuth} onLogout={this.props.onLogout} />
				</ul>
			</header>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);