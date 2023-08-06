import React from "react";

export default class PostStatusFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttons : [
				{category: "all", label : "Все", active: true},
				{category: "like", label : "Понравилось", active: false},
			]
		}
		this.setActive = this.setActive.bind(this);

	}
	setActive(category) {
		const {buttons} = this.state;
		const index = buttons.findIndex((button) => button.category === category);

		const newArr = buttons.map((button, i) => {
			button.active = false;
			if (i === index) {
				button.active = true;	
				this.props.changeCategory(button.category);
			}	
			return button;
		})

		this.setState({
			buttons : newArr
		});
	}

	render() {
		const {buttons} = this.state;

		const renderButtons = buttons.map((button) =>{
			const {category, label, active} = button;
			let btnClass = 'btn btn-outline-secondary';
			if (active) btnClass = 'btn btn-info';
			return <button 
				key={category}
				className={btnClass}
				onClick={() => this.setActive(category)}>{label}</button>
		});

		return (
			<div className="btn-group">
				{renderButtons}
			</div>
		)
	}
}