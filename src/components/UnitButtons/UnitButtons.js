import React from "react";
import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Aux";

const unitbuttons = props => {
	let info = "";
	if(props.unitData) {
		info = props.unitData.map(info => {
			const linkTo = info.toLowerCase().replace(/ /g,'');
			const url = "/pages/" + props.url.section + "/" + props.url.unit + "/" + linkTo;
			return (
				<NavLink 
					activeClassName="btn-active" 
					to={url} key={info} 
					className="btn page-link">
					{info}
				</NavLink>
			)
		});
	}
	return (
		<Aux>
			{info}
		</Aux>
	);
};

export default unitbuttons;