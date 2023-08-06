import React from "react";

export default class SearchPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text : ''
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({
			text: e.target.value
		})
		this.props.onUpdateKey(e.target.value);
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="Поиск записи"
				onChange={this.onChange}
				value={this.state.text}
			/>
		)
	}
}