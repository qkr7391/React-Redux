import React, { Component, useState } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

function App() {
	const [subject, setSubject] = useState({
		title: "WEB",
		sub: "world wide web!",
	});

	return (
		<div className="App">
			<Subject title={subject.title} sub={subject.sub}></Subject>
			<TOC></TOC>
			<Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
		</div>
	);
}

// class App extends Component {
// constructor(props){
// super(props);
// 	this.state = {
// 		subject:{title: 'WEB', sub: "world wide web!"}
// 	}
// }
// 	render() {
// 		return (
// 			<div className="App">
// <Subject title={this.state.subject.title}
// sub={this.state.subject}></Subject>
// 			</div>
// 		);
// 	}
// }

export default App;
