import React, { Component } from 'react';
import PageStoreModule from "../../store/worksheets/worksheets.js"
import MaterialsCards from "../../components/MaterialsCards/MaterialsCards";
import UnitButtons from "../../components/UnitButtons/UnitButtons";

class Materials extends Component {
	state = {
		pageData: null,
		unitData: null,
		pageTitle: null
	}
	componentWillMount() {
		const section = this.props.match.params.section;
		const unit = this.props.match.params.unit;
		const part = this.props.match.params.part;
		const pageData = PageStoreModule.getStoreData(section, unit, part) || null;
		const unitData = PageStoreModule.getUnitData(section, unit) || null;
		const pageTitle = PageStoreModule.getPageTitle(section, unit) || null;
		this.setState({
			pageData: pageData,
			unitData: unitData,
			pageTitle: pageTitle
		});
	}

	componentWillReceiveProps(nextProps) {
		const section = nextProps.match.params.section;
		const unit = nextProps.match.params.unit;
		const part = nextProps.match.params.part;
		const pageData = PageStoreModule.getStoreData(section, unit, part) || null;
		const unitData = PageStoreModule.getUnitData(section, unit) || null;
		const pageTitle = PageStoreModule.getPageTitle(section, unit) || null;
		this.setState({
			pageData: pageData,
			unitData: unitData,
			pageTitle: pageTitle
		});
	}

	render() {
		let pageTitle = "";
		if(this.state.pageTitle) {
			pageTitle = <h4>{this.state.pageTitle.title + " "}<span>{this.state.pageTitle.unit}</span></h4>;
		}
		return (
			<div className="container-fluid">
				<div className="row center">
					<div className="col s12 m6">
						{pageTitle}
					</div>
					<div className="col s12 m6">
						<UnitButtons url={this.props.match.params} unitData={this.state.unitData} />
					</div>
				</div>
				<hr />
				<div className="row">
			  	<MaterialsCards pageData={this.state.pageData} />
			  </div>
			</div>
		);
	}
};

export default Materials;