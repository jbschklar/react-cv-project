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
		};
	}

	handleNameChange = (e) => {
		this.setState({
			school: e.target.value,
		});
	};

	handleMajorChange = (e) => {
		this.setState({
			major: e.target.value,
		});
	};

	handleGradChange = (e) => {
		this.setState({
			gradDate: e.target.value,
		});
	};

	validateSubmit(obj) {
		let valid = true;
		Object.entries(obj).forEach((arr) => {
			if (arr[1] === null) valid = false;
		});
		return valid;
	}

	render() {
		if (this.state.edit) {
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
				>
					<label>
						School Name:
						<input
							type="text"
							className="school-name"
							onChange={this.handleNameChange}
						></input>
					</label>
					<label>
						Major:
						<input
							type="text"
							className="major"
							onChange={this.handleMajorChange}
						></input>
					</label>
					<label>
						Graduation Year:
						<input
							type="number"
							min="1900"
							max="2099"
							className="grad-year"
							onChange={this.handleGradChange}
						></input>
					</label>
					<button type="submit">Submit</button>
				</form>
			);
		}

		return (
			<ul>
				{this.props.obj.education.map((el) => {
					return (
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
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Education;
