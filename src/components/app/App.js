import React from "react";

import AppHeader from "../app-header/App-header";
import SearchPanel from "../search-panel/Search-panel";
import PostStatusFilter from "../post-status-filter/Post-status-filter";
import Postlist from "../post-list/Post-list"
import PostAddForm from "../post-add-form/Post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data : [
				{label : 'Lol', important: true, like: false, id : "1"},
				{label : 'hello', important: false, like: false, id : "2"},
				{label : 'su', important: true, like: false, id : "3"},
			],
			filter : '',
			keyword : ''
		}

		this.deleteItem = this.deleteItem.bind(this);
		this.onLikeOrImportant = this.onLikeOrImportant.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onUpdateKey = this.onUpdateKey.bind(this);
		this.changeCategory = this.changeCategory.bind(this);

		this.maxId = 4;
	}

	deleteItem(id) {
		const { data } = this.state;
		const index = data.findIndex((element) => element.id === id );
		const newArr = [...data.slice(0, index),  ...data.slice(index + 1, data.length)];

		this.setState(({data}) => ({
			data : newArr
		}));
	}

	onLikeOrImportant(id, like) {
		const {data} = this.state;
		const index = data.findIndex((element) => element.id === id );

		let newItem = {};
		if (like) newItem = {...data[index], like : !data[index].like}
		else newItem = {...data[index], important : !data[index].important}

		const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)];

		this.setState(({data}) => ({
			data : newArr
		}));
	}

	addItem(label) {
		if (label.length < 2) return;
		const newItem = {
			label : label,
			important : false,
			like: false,
			id: this.maxId++,
		}

		const {data} = this.state;
		const newArr = [...data, newItem];
		this.setState({
			data : newArr
		});
	}

	onUpdateKey(key) {
		this.setState({
			keyword : key
		})
	}

	search() {
		const {data, keyword} = this.state;

		return data.filter((element) => element.label.indexOf(keyword) > -1);
	}

	changeCategory(category) {
		this.setState({
			filter : category
		})
	}

	filter(posts) {
		const {filter} = this.state;
		switch(filter){
			case 'like':
				return posts.filter((post) => post.like === true);
			case 'all':
				return posts;
			default:
				return posts;
		}
	}

	render() {
		const filteredPost = this.filter(this.search());
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel 
					onUpdateKey={this.onUpdateKey}/>
					<PostStatusFilter 
					changeCategory={this.changeCategory}/>	
				</div>
				<Postlist 
				posts={filteredPost} 
				onDelete={this.deleteItem}
				onLikeOrImportant={this.onLikeOrImportant}/>
				<PostAddForm 
				onAdd={this.addItem}/>
			</div>
		)
	}
};
