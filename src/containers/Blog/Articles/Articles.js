import React, { Component } from "react";
import BlogStoreModule from "../../../store/articles/articles";

class Articles extends Component {
	state = {
		articles: null
	}

	componentWillMount() {
		const page = this.props.page;
		this.setState({ articles: BlogStoreModule.getStoreData(page) });
	}

	componentWillReceiveProps(nextProps) {
		const page = nextProps.page;
		this.setState({ articles: BlogStoreModule.getStoreData(page) });
	}

	render() {
		return this.state.articles.map(article => 
			<li key={article.title} className="collection-item">
	      <h5 className="title">{article.title}</h5>
	      <h6 className="red-text">{article.author}</h6>
	      <p>{article.text} <a className="blue-text" href={article.url}>Read more</a></p>
	    </li>
		);
	}
};

export default Articles;