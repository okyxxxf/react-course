import React from "react";

import PostListItem from "../post-list-item/Post-list-item";

export default class PostList extends React.Component{
	render() {
		const {onDelete, onLikeOrImportant} = this.props;
		const elements = this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<PostListItem 
					onDelete={() => onDelete(post.id)} 
					onLike={() => onLikeOrImportant(post.id, true)}
					onImportant={() => onLikeOrImportant(post.id, false)}
					{...post}/>
				</li>
			)
		});
	
		return (
			<ul className="app-list list-group">
				{elements}
			</ul>
		)
	}
	
}
