import React, { Component } from "react";
import "./App.css";
import PersonalData from "./components/PersonalData";
import Education from "./components/Education";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: {
				firstName: null,
				lastName: null,
			},
			contactInfo: {
				phone: null,
				email: null,
			},
			workHistory: [],
			education: [],
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEduSubmit = this.handleEduSubmit.bind(this);
	}

	formatPhone = function (numStr) {
		return (
			"(" +
			numStr.slice(0, 3) +
			") " +
			numStr.slice(3, 6) +
			"-" +
			numStr.slice(6)
		);
	};

	handleSubmit(obj) {
		this.setState({
			name: {
				firstName: obj.firstName,
				lastName: obj.lastName,
			},
			contactInfo: {
				phone: this.formatPhone(obj.phone),
				email: obj.email,
			},
		});
	}

	handleEduSubmit(obj) {
		this.setState({
			education: this.state.education.concat({
				school: obj.school,
				major: obj.major,
				gradDate: obj.gradDate,
			}),
		});
	}

	render() {
		return (
			<div>
				<PersonalData handleSubmit={this.handleSubmit} obj={this.state} />
				<Education handleSubmit={this.handleEduSubmit} obj={this.state} />
			</div>
		);
	}
}

export default App;
