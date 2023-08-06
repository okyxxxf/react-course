import React from "react";

export default class PostAddForm extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			text : ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const {onAdd} = this.props;
		const {text} = this.state;

		onAdd(text);

		this.setState({
			text: ''
		});
	}

	render() {
		const {text} = this.state;
		return (
			<form
				className="bottom-panel d-flex"
				onSubmit={this.onSubmit}>
				<input 
					className="form-control new-post-label"
					type="text"
					placeholder="О чем думаете вы?"
					onChange={this.onChange}
					value={text}
				/>
				<button
					type="submit"
					className="btn btn-outline-secondary">Добавить
				</button>
			</form>
		)
	}
}