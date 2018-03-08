import React, { Component } from "react";
import M from "materialize-css";

class FileUpload extends Component {
	state = {
		formData: {
			name: "",
			title: "",
			instructions: "",
			grade: "",
			file: ""
		}
	}

	componentDidMount() {
		M.FormSelect.init(this.select)
	}

	handleOnChange = (event) => {
		event.preventDefault();
		this.setState({
			formData: {
				[event.target.name]: event.target.value
			}
		});
		this.handleFormValidation();
	}

	handleFormValidation = () => {
		let valid = true;
		for(let key in this.state.formData) {
			if(this.state.formData[key].length === 0) {
				valid = false;
			}
		}
		if(valid) {
			document.getElementById("submitBtn").classList.toggle("disabled");
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form was submitted");
	}

	render() {
		console.log(this.state.formData)
		return (
			<div className="col m12 l4">
				<div className="card-panel">
					<h4 className="center">File Upload</h4>
					<p className="caption center">People helping people. It's powerful stuff. Help contribute to NihonALT.</p>
					<div className="row">
						<form className="col s12" onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="input-field col s6">
									<input 
										type="text" 
										className="validate" 
										id="name" 
										name="name" 
										placeholder="Your name" 
										value={this.state.formData.uploaderName}
										onChange={this.handleOnChange} />
								</div>
								<div className="input-field col s6">
									<input 
										type="text" 
										className="validate" 
										id="title" 
										name="title" 
										placeholder="File Title" 
										value={this.state.formData.fileTitle}
										onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<textarea
										name="instructions" 
										id="instructions"
										placeholder="Enter detailed instructions here."
										className="materialize-textarea"
										value={this.state.formData.instructions}
										onChange={this.handleOnChange}>
									</textarea>
								</div>
							</div>
							<div className="row">
								<p className="caption center">What grade, class, or club is this mainly for?</p>
								<div className="input-field col s12">
							    <select onChange={this.handleOnChange} name="grade" ref={(select) => {this.select = select}}>
							    	<option value="" disabled selected>Choose one</option>
						        <option value="elementary">Elementary</option>
							      <optgroup label="Junior High School">
							        <option value="jhs-y1">JHS Year 1</option>
							        <option value="jhs-y2">JHS Year 2</option>
							        <option value="jhs-y3">JHS Year 3</option>
							      </optgroup>
						        <option value="specialneeds">Special Needs</option>
						        <option value="highschool">High School</option>
							    </select>
							    <label>This is for:</label>
							  </div>
							</div>
							<div className="row">
								<div className="file-field input-field">
									<div onChange={this.handleOnChange} className="btn">File <input name="file" type="file" /></div>
									<div className="file-path-wrapper">
										<input type="text" name="filepath" className="file-path validate"/>
									</div>
								</div>
							</div>
							<div className="center">
								<button 
									id="submitBtn" 
									className="btn disabled">
										Submit <i className="material-icons right">send</i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default FileUpload;