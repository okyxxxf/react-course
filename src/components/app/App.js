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
				{label : 'Lol', important: true, id : "1"},
				{label : 'hello', important: false, id : "2"},
				{label : 'su', important: true, id : "3"},
				{label : 'bye', important: false, id : "4"},
				{label : 'bbbbbbbb', important: true, id : "5"},
			]
		}

		this.deleteItem = this.deleteItem.bind(this);
		this.maxId = 6;
	}

	deleteItem(id) {
		const index = this.state.data.findIndex((element) => element.id === id );
		const newArr = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1, this.state.data.length)];
		console.log(newArr, index);

		this.setState(({data}) => ({
			data : newArr
		}));
	}

	render() {
		const {data} = this.state;
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />	
				</div>
				<Postlist posts={data} onDelete={this.deleteItem}/>
				<PostAddForm />
			</div>
		)
	}
};
