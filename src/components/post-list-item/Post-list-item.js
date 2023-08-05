import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


export default class PostListItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			important : false,
			like : false
		}
		this.onImportant = this.onImportant.bind(this);
		this.onLike = this.onLike.bind(this);
	}

	onImportant() {
		this.setState(({important}) => ({
			important : !important
		}));
	}

	onLike() {
		this.setState(({like}) => ({
			like : !like
		}));
	}

	render() {
		const {label, onDelete} = this.props;
		const {important, like} = this.state;

		let classNames = 'app-list-item d-flex justify-content-between'
		if (important) classNames += ' important';
		if (like) classNames += ' like ';
	
		return (
			<div className={classNames} >
				<span className="app-list-item__label" onClick={this.onLike}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-item-center">
					<button 
						className="btn-star btn-sm"
						type="button"
						onClick={this.onImportant}
					>
						<FontAwesomeIcon icon={faStar} />
					</button>
					<button 
						type="button"
						className="btn-trash btn-sm"
						onClick={onDelete}
					>
						<FontAwesomeIcon icon={faTrash} />
					</button>
						<FontAwesomeIcon icon={faHeart} />
				</div>
			</div>
		)
	}
}