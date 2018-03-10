import React, { Component } from "react";
import BlogStoreModule from "../../store/articles/articles";
import Articles from "../Articles/Articles";

class Blog extends Component {
	state = {
		articlePage: 1,
		articles: null,
		maxPage: null
	}

	componentWillMount() {
		this.setState({ maxPage: BlogStoreModule.getMaxPage() });
	}

	onNavigateNext = () => {
		if(this.state.articlePage + 1 > this.state.maxPage) {
			return false;
		}
		this.setState(prevState => {
			return {
				articlePage: prevState.articlePage + 1
			};
		});
	}

	onNavigatePrevious = () => {
		if(this.state.articlePage === 1) {
			return false;
		}
		this.setState(prevState => {
			return {
				articlePage: prevState.articlePage - 1
			};
		});
	}

	render() {
		let prevBtnClass = "btn blog-btn";
		let nextBtnClass = "btn blog-btn";
		if(this.state.articlePage === 1) {
			prevBtnClass = "btn blog-btn disabled";
		}
		if(this.state.articlePage === this.state.maxPage) {
			nextBtnClass = "btn blog-btn disabled";
		}
		return (
			<div className="col m12 l8">
				<div className="card-panel">
					<h4 className="center">Otsukare News</h4>
					<ul className="collection">
						<Articles page={this.state.articlePage} />
					</ul>
					<div className="center">
						<button 
							onClick={() => this.onNavigatePrevious()} 
							className={prevBtnClass}>
								Newer articles <i className="material-icons left">navigate_before</i>
						</button>
						<button 
							onClick={() => this.onNavigateNext()} 
							className={nextBtnClass}>
								Older articles <i className="material-icons right">navigate_next</i>
						</button>
					</div>
				</div>
			</div>
		);
	}
};


export default Blog;