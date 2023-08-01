import React from "react";

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input 
				className="form-control new-post-label"
				type="text"
				placeholder="О чем думаете вы?"
			/>
			<button
				type="submit"
				className="btn btn-outline-secondary"
			>
				Добавить
			</button>
		</form>
	)
};

export default PostAddForm;