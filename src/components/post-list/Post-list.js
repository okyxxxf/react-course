import React from "react";

import PostListItem from "../post-list-item/Post-list-item";

const PostList = ({posts, onDelete}) => {

	const elements = posts.map((post) => {
		return (
			<li className="list-group-item" key={post.id}>
				<PostListItem onDelete={() => onDelete(post.id)} {...post}/>
			</li>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
};

export default PostList