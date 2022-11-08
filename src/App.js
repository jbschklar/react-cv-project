import React, { Component } from "react";
import "./App.css";
import PersonalData from "./components/PersonalData";

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
	}

	handleSubmit(obj) {
		if (!obj) return;
		this.setState({
			name: {
				firstName: obj.firstName,
				lastName: obj.lastName,
			},
			contactInfo: {
				phone: obj.phone,
				email: obj.email,
			},
		});
	}
	render() {
		return (
			<div>
				<PersonalData handleSubmit={this.handleSubmit} obj={this.state} />
			</div>
		);
	}
}

export default App;
