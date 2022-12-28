import React, { Component } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

const EducationList = (props) => {
	// const {edit, id, editID, value} = props;
	// if(edit && id === editID) {
	// 	return <input type='text' placeholder={value} />;
	// }

	if (props.obj.education.length > 0)
		return (
			<ul>
				{props.obj.education.map((el) => {
					return (
						<li key={el.id} id={el.id}>
							<h3>School: {el.school}</h3>
							<h3>Major: {el.major}</h3>
							<h3>Graduation: {el.gradDate}</h3>
							{/* <EditIcon
								editFn={editItem}
								submitFn={() => {
									this.props.handleSubmit(this.props.obj.handleSubmit);
									this.props.setState({
										edit: false,
									});
								}}
							/> */}
						</li>
					);
				})}
			</ul>
		);
};

const EditIcon = (props) => {
	return (
		<div>
			<MdModeEditOutline onClick={props.editFn} />
			<BsCheck onClick={props.submitFn} className="hidden" />
		</div>
	);
};

class EducationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: true,
			school: null,
			major: null,
			gradDate: null,
			id: "",
		};
		this.editItem = this.editItem.bind(this);
	}

	editItem = (e) => {
		this.setState({
			edit: true,
		});
	};

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
				<div>
					<EducationList obj={this.props.obj} />

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
					<EditIcon
						editFn={this.editItem}
						submitFn={() => {
							this.props.handleSubmit(this.state);
							this.setState({
								edit: false,
							});
						}}
					/>
				</div>
			);
		}
		return (
			<div>
				<EducationList obj={this.props.obj} />
				<EditIcon
					editFn={this.editItem}
					submitFn={() => {
						this.props.handleSubmit(this.state);
						this.setState({
							edit: false,
						});
					}}
				/>
			</div>
		);
		// return (
		// 	<ul>
		// 		{this.props.obj.education.map((el) => {
		// 			return (
		// 				<li key={el.id} id={el.id}>
		// 					<h3>School: {el.school}</h3>
		// 					<h3>Major: {el.major}</h3>
		// 					<h3>Graduation: {el.gradDate}</h3>
		// 					<EditIcon
		// 						editFn={this.editItem}
		// 						submitFn={() => {
		// 							this.props.handleSubmit(this.state);
		// 							this.setState({
		// 								edit: false,
		// 							});
		// 						}}
		// 					/>
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// );
	}
}

export default EducationForm;
