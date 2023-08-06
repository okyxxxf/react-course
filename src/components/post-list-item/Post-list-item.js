import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


export default class PostListItem extends React.Component{
	render() {
		const {label, onDelete, important, like, onLike, onImportant} = this.props;

		let classNames = 'app-list-item d-flex justify-content-between'
		if (important) classNames += ' important';
		if (like) classNames += ' like ';
	
		return (
			<div className={classNames} >
				<span className="app-list-item__label" onClick={onLike}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-item-center">
					<button 
						className="btn-star btn-sm"
						type="button"
						onClick={onImportant}
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