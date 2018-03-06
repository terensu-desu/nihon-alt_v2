import React, { Component } from "react";

import Blog from "../../components/Blog/Blog";
import FileUpload from "../../components/FileUpload/FileUpload";
//import styles from "./Home.css";

class Home extends Component {
	state = {};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<FileUpload />
					<Blog />
				</div>
			</div>
		);
	}
}

export default Home;
