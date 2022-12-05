import React, { Component } from "react";
import { MdModeEditOutline } from "react-icons/md";
class PersonalData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: true,
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
		};
	}
	// add error handling to show below input in red during typing.
	handleFNChange = (e) => {
		this.setState({
			firstName: e.target.value,
		});
	};

	handleLNChange = (e) => {
		this.setState({
			lastName: e.target.value,
		});
	};

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	handlePhoneChange = (e) => {
		const formattedPhone = e.target.value;
		this.setState({
			phone: formattedPhone,
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
		if (this.state.edit)
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
					<div className="name">
						<label>
							First name:
							<input
								type="text"
								className="first-name"
								onChange={this.handleFNChange}
								value={this.state.firstName ? this.state.firstName : ""}
							></input>
						</label>
						<label>
							Last name:
							<input
								type="text"
								className="last-name"
								onChange={this.handleLNChange}
								value={this.state.lastName ? this.state.lastName : ""}
							></input>
						</label>
					</div>
					<div className="contact-info">
						<label>
							Email:
							<input
								type="email"
								className="email"
								onChange={this.handleEmailChange}
								value={this.state.email ? this.state.email : ""}
							></input>
						</label>
						<label>
							Phone:
							<input
								type="tel"
								className="phone"
								onChange={this.handlePhoneChange}
								value={this.state.phone ? this.state.phone : ""}
							></input>
						</label>
					</div>
					<button type="submit">Submit</button>
				</form>
			);
		return (
			<div>
				<h1>
					{this.props.obj.name.firstName + " " + this.props.obj.name.lastName}
				</h1>
				<h3>
					Phone:
					{this.props.obj.contactInfo.phone} Email:{" "}
					{this.props.obj.contactInfo.email}
				</h3>
				<MdModeEditOutline
					onClick={(e) => {
						this.setState({
							edit: true,
						});
					}}
				/>
			</div>
		);
	}
}

export default PersonalData;
