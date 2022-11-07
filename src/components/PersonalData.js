import React, { Component } from "react";
class PersonalData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		if (e.target.classList.contains("first-name"))
			this.setState({
				firstName: e.target.value,
			});
		if (e.target.classList.contains("last-name"))
			this.setState({
				lastName: e.target.value,
			});
		if (e.target.classList.contains("email"))
			this.setState({
				email: e.target.value,
			});
		if (e.target.classList.contains("phone"))
			this.setState({
				phone: e.target.value,
			});
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<div className="name">
					<label>
						First name:
						<input
							type="text"
							className="first-name"
							onChange={this.handleChange}
						></input>
					</label>
					<label>
						Last name:
						<input type="text" className="last-name"></input>
					</label>
				</div>
				<div className="contact-info">
					<label>
						Email:
						<input type="email" className="email"></input>
					</label>
					<label>
						Phone:
						<input type="tel" className="phone"></input>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default PersonalData;
