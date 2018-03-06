import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

import Sidenav from "./Sidenav";
import styles from "./Navbar.css";

class Navbar extends Component {
	componentDidMount() {
		const options = {coverTrigger: false};
		M.Dropdown.init(this.esTrigger, options);
		M.Dropdown.init(this.jhsTrigger, options);
		M.Dropdown.init(this.hsTrigger, options);
		M.Dropdown.init(this.snTrigger, options);
		M.Sidenav.init(this.sidenav);
	}

	render() {
		return (
			<header>
				<nav className={styles.Nav}>
					<div className="nav-wrapper">
						<a href="/" className="brand-logo">Logo</a>
						<a data-target="mobile-sidebar" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a 
									ref={(esTrigger) => {this.esTrigger = esTrigger}}
									className="dropdown-trigger" 
									data-target="esDropdown">
										Elementary School
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(jhsTrigger) => {this.jhsTrigger = jhsTrigger}}
									className="dropdown-trigger" 
									data-target="jhsDropdown">
										Jr. High School
										<i className="material-icons right"><span>arrow_drop_down</span></i>
								</a>
							</li>
							<li>
								<a
									ref={(snTrigger) => {this.snTrigger = snTrigger}}
									className="dropdown-trigger" 
									data-target="snDropdown">
										Special Needs
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
						</ul>
					</div>
				</nav>
				<ul id="esDropdown" className="dropdown-content">
				  <li><NavLink to="/es">Activities</NavLink></li>
				  <li><NavLink to="/es">Games</NavLink></li>
				  <li><NavLink to="/es">Songs</NavLink></li>
				</ul>
				<ul id="jhsDropdown" className="dropdown-content">
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
				<ul id="snDropdown" className="dropdown-content">
				  <li><NavLink to="/sn">Activities</NavLink></li>
				  <li><NavLink to="/sn">Games</NavLink></li>
				  <li><NavLink to="/sn">Songs</NavLink></li>
				</ul>
				<ul id="hsDropdown" className="dropdown-content">
				  <li><NavLink to="/hs">Activities</NavLink></li>
				  <li><NavLink to="/hs">Games</NavLink></li>
				</ul>
				<ul 
					ref={(sidenav) => {this.sidenav = sidenav}}
					className="sidenav" 
					id="mobile-sidebar">
					<Sidenav/>
				</ul>
			</header>
		)
	}
}

export default Navbar;