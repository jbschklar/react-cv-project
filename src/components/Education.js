import React, { Component } from "react";
import { MdModeEditOutline } from "react-icons/md";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: true,
		};
	}
	render() {
		return (
			<div>
				<h3>School: {this.props.school}</h3>
				<h3>Major: {this.props.major}</h3>
				<h3>Graduation: {this.props.gradDate}</h3>
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

export default Education;
