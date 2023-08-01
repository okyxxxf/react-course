import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const PostListItem = () => {
	return (
		<li className="app-list-item d-flex justify-content-between">
			<span className="app-list-item__label">
				awesrdtfygukh
			</span>
			<div className="d-flex justify-content-center align-item-center">
				<button 
					type="button"
					className="btn-star btn-sm"
				>
					<FontAwesomeIcon icon={faStar} />
				</button>
				<button 
					type="button"
					className="btn-trash btn-sm"
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
					<FontAwesomeIcon icon={faHeart} />
			</div>
		</li>
	)
};

export default PostListItem