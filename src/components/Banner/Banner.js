import React from "react";

import bannerImage from "../../assets/images/banner.jpg";

const banner = (props) => (
	<div 
		id="banner" 
		className="container-fluid"
		style={{background: `url(${bannerImage}) center`}}>
		<div className="row">
			<div className="col s12">
				<h2 className="white-text">Nihon <span>ALT</span></h2>
				<h3 className="white-text">Otsukaresama desu!</h3>
			</div>
		</div>
	</div>
);

export default banner;