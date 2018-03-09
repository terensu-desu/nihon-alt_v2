import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";
import Auth from "../../containers/Auth/Auth";
import Blog from "../../components/Blog/Blog";
import FileUpload from "../../components/FileUpload/FileUpload";

class Home extends Component {
	componentWillMount() {
		this.props.onAuthCheckState();
	}

	render() {
		let secondaryComponent = <Auth />;
		if(this.props.isAuthenticated) {
			secondaryComponent = <FileUpload />;
		}
		return (
			<div className="container-fluid">
				<div className="row">
					{secondaryComponent}
					<Blog />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);