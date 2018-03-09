import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Aux from "../../hoc/Aux";
import * as actions from "../../store/actions/";

class FileUpload extends Component {
	state = {
		formData: {
			name: {
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			title: {
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			instructions: {
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			grade: {
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			file: {
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
		}
	}

	componentDidMount() {
		M.FormSelect.init(this.select)
	}

	handleOnChange = (event, inputName) => {
		const updatedFormData = {
			...this.state.formData,
			[inputName]: {
				...this.state.formData[inputName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.formData[inputName].validation),
				touched: true
			}
		};
		this.setState({formData: updatedFormData});
		this.handleFormValidation();
	}

	checkValidity = (value, rules) => {
		let isValid = true;
		if(rules.required) {
			isValid = value.trim() !== "" && isValid;
		}
		return isValid;
	}

	handleFormValidation = () => {
		let valid = true;
		const currentFormData = {...this.state.formData};
		for(let key in currentFormData) {
			if(!currentFormData[key].valid) {
				valid = false;
			}
		}
		return valid;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const submitData = {
			userId: this.props.userId,
			name: this.state.formData.name.value,
			title: this.state.formData.title.value,
			instructions: this.state.formData.instructions.value,
			grade: this.state.formData.grade.value,
			file: this.state.formData.file.value
		}
		this.props.onUploadFormSubmit(submitData, this.props.token);
		this.setState({
			formData: {
				...this.state.formData,
				name: {
					...this.state.formData.name,
					value: "",
					valid: false,
					touched: false
				},
				title: {
					...this.state.formData.title,
					value: "",
					valid: false,
					touched: false
				},
				instructions: {
					...this.state.formData.instructions,
					value: "",
					valid: false,
					touched: false
				},
				grade: {
					...this.state.formData.grade,
					value: "",
					valid: false,
					touched: false
				},
				file: {
					...this.state.formData.file,
					value: "",
					valid: false,
					touched: false
				},
			}
		});
		M.toast({html: "Thank you!", classes: "rounded", displayLength: 10000});
	}

	render() {
		let buttonClass = "btn disabled";
		if(this.handleFormValidation()) {
			buttonClass = "btn";
		}
		let form = (
			<Aux>
				<div className="row">
					<div className="input-field col s6">
						<input 
							type="text" 
							className="validate" 
							id="name" 
							name="name" 
							placeholder="Your name" 
							value={this.state.formData.name.value}
							onChange={(event) => this.handleOnChange(event, "name")} />
					</div>
					<div className="input-field col s6">
						<input 
							type="text" 
							className="validate" 
							id="title" 
							name="title" 
							placeholder="File Title"
							maxLength="40"
							value={this.state.formData.title.value}
							onChange={(event) => this.handleOnChange(event, "title")} />
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<textarea
							name="instructions" 
							id="instructions"
							placeholder="Enter detailed instructions here."
							className="materialize-textarea"
							value={this.state.formData.instructions.value}
							onChange={(event) => this.handleOnChange(event, "instructions")}
							onClick={() => M.toast({html: "Thank you!", classes: "rounded", displayLength: 5000})}>
						</textarea>
					</div>
				</div>
				<div className="row">
					<p className="caption center">What grade, class, or club is this mainly for?</p>
					<div className="input-field col s12">
				    <select onChange={(event) => this.handleOnChange(event, "grade")} name="grade" ref={(select) => {this.select = select}}>
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
						<div onChange={(event) => this.handleOnChange(event, "file")} className="btn">File <input name="file" type="file" /></div>
						<div className="file-path-wrapper">
							<input type="text" name="filepath" className="file-path validate"/>
						</div>
					</div>
				</div>
			</Aux>
		);
		if(this.props.loading) {
			form = <Spinner />
		}
		return (
			<div className="col m12 l4">
				<div className="card-panel">
					<h4 className="center">File Upload</h4>
					<p className="caption center">People helping people. It's powerful stuff. Help contribute to NihonALT.</p>
					<div className="row">
						<form id="uploadForm" className="col s12" onSubmit={this.handleSubmit}>
							{form}
							<div className="center">
								<button 
									id="submitBtn" 
									className={buttonClass}>
										Upload <i className="material-icons right">file_upload</i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		userId: state.auth.userId,
		token: state.auth.token,
		loading: state.upload.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onUploadFormSubmit: (uploadData, token) => dispatch(actions.upload(uploadData, token))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);