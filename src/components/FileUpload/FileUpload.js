import React, { Component } from "react";
import M from "materialize-css";

class Fileupload extends Component {
	componentDidMount() {
		M.FormSelect.init(this.select)
	}

	render() {
		return (
			<div className="col m12 l4">
				<div className="card-panel">
					<h4 className="center">File Upload</h4>
					<p className="caption center">People helping people. It's powerful stuff. Help contribute to NihonALT.</p>
					<div className="row">
						<form className="col s12">
							<div className="row">
								<div className="input-field col s6">
									<input 
										type="text" 
										className="validate" 
										id="uploadername" 
										name="uploadername" 
										placeholder="Your name" />
								</div>
								<div className="input-field col s6">
									<input 
										type="text" 
										className="validate" 
										id="filetitle" 
										name="filetitle" 
										placeholder="File Title" />
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<textarea
										name="instructions" 
										id="instructions"
										placeholder="Enter detailed instructions here."
										className="materialize-textarea">
									</textarea>
								</div>
							</div>
							<div className="row">
								<p className="caption center">What year, class, or club is this mainly for?</p>
								<div className="input-field col s12">
							    <select ref={(select) => {this.select = select}}>
						        <option value="elementary">Elementary</option>
							      <optgroup label="Junior High School">
							        <option value="jhs-y1">JHS Year 1</option>
							        <option value="jhs-y2">JHS Year 2</option>
							        <option value="jhs-y3">JHS Year 3</option>
							      </optgroup>
						        <option value="specialneeds">Special Needs</option>
						        <option value="highschool">High School</option>
							    </select>
							    <label>Optgroups</label>
							  </div>
							</div>
							<div className="row">
								<div className="file-field input-field">
									<div className="btn">File <input type="file" /></div>
									<div className="file-path-wrapper">
										<input type="text" className="file-path validate"/>
									</div>
								</div>
							</div>
							<div className="center">
								<a className="btn">Submit <i className="material-icons right">send</i></a>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default Fileupload;