import React, { Component } from "react";
import { MdModeEditOutline } from "react-icons/md";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: true,
			school: null,
			major: null,
			gradDate: null,
			// education: [],
		};
	}

	validateSubmit(obj) {
		let valid = true;
		Object.entries(obj).forEach((arr) => {
			if (arr[1] === null) valid = false;
		});
		return valid;
	}

	render() {
		if (this.state.edit && this.state.education.length === 0) {
			return (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (!this.validateSubmit(this.state)) return;
						this.setState({
							edit: false,
						});
						this.props.handleSubmit(this.state);
					}}
				></form>
			);
		}
		return (
			<ul>
				{this.props.obj.education.forEach((el) => {
					<li>
						<h3>School: {el.school}</h3>
						<h3>Major: {el.major}</h3>
						<h3>Graduation: {el.gradDate}</h3>
						<MdModeEditOutline
							onClick={(e) => {
								this.setState({
									edit: true,
								});
							}}
						/>
					</li>;
				})}
			</ul>
		);
	}
}

export default Education;
