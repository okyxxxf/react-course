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

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />	
			</div>
			<Postlist />
			<PostAddForm />
		</div>
	)
};

export default App;