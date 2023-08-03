import React from "react";

import PostListItem from "../post-list-item/Post-list-item";

const PostList = ({posts}) => {

	const elements = posts.map((post) => {
		return (
			<li className="list-group-item" key={post.id}>
				<PostListItem {...post}/>
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