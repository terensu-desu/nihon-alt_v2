import React from "react";

import Aux from "../../hoc/Aux";
import WIPimage from "../../assets/images/WIPimage.jpg";

const materialscards = props => {
	let cardMap = (
		<div className="col s12 m4 l3 offset-m4 offset-l5">
	    <div className="card">
	      <div className="card-image">
	        <img src={WIPimage} alt="WIP placeholder" />
	      </div>
	      <div className="card-content">
	        <span className="card-title">This page is incomplete</span>
	        <p>We have no materials for this page. Help us fill it up by contributing!</p>
	      </div>
	    </div>
	  </div>
	);
	if(props.pageData) {
		cardMap = props.pageData.map(card => (
			<div className="col s12 m4 l3" key={card.id}>
		    <div className="card">
		      <div className="card-image">
		        <img src={card.image} alt={card.title} />
		      </div>
		      <div className="card-content">
		        <span className="card-title">{card.title}</span>
		        <p>{card.instructions}</p>
		      </div>
		      <div className="card-action center">
		        <a href={card.download}>Download this file</a>
		      </div>
		    </div>
		  </div>
		));
	}
	return (
		<Aux>
			{cardMap}
		</Aux>
	);
}

export default materialscards;