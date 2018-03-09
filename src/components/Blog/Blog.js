import React from 'react';

const blog = (props) => {

	return (
		<div className="col m12 l8">
			<div className="card-panel">
				<h4 className="center">Otsukare News</h4>
				<ul className="collection">
					<li className="collection-item">
			      <h5 className="title">My Transformation from ALT to Super ALT</h5>
			      <h6 className="red-text">Nate G.</h6>
			      <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle... <a className="blue-text">Read more</a></p>
			    </li>
			    <li className="collection-item">
			      <h5 className="title">Tips for New ALTs From Grizzled Veterans</h5>
			      <h6 className="red-text">Matthew K.</h6>
			      <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle... <a className="blue-text">Read more</a></p>
			    </li>
			    <li className="collection-item">
			      <h5 className="title">Saving Money in Japan - Slash Your Phone Bill</h5>
			      <h6 className="red-text">Karl G.</h6>
			      <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle... <a className="blue-text">Read more</a></p>
			    </li>
				</ul>
				<div className="center">
					<button className="btn blog-btn">Newer articles <i className="material-icons left">navigate_before</i></button>
					<button className="btn blog-btn">Older articles <i className="material-icons right">navigate_next</i></button>
				</div>
			</div>
		</div>
	);
};

export default blog;