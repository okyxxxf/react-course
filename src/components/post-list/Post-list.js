import React from "react";

import PostListItem from "../post-list-item/Post-list-item";

const PostList = () => {
	return (
		<ul className="app-list list-group">
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
			<PostListItem />
		</ul>
	)
};

export default PostList