import React, { Component, useState } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

function App() {
	const [subject, setSubject] = useState({
		mode: "welcome",
		title: "WEB",
		sub: "world wide web!",
		welcome: { title: "welcome", desc: "Hello, React!!!" },
		contents: [
			{ id: 1, title: "HTML", desc: "HTML is for information" },
			{ id: 2, title: "CSS", desc: "CSS is for design" },
			{ id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
		],
	});

	var _title,
		_desc = null;
	if (subject.mode === "welcome") {
		_title = subject.welcome.title;
		_desc = subject.welcome.desc;
	} else if (subject.mode === "read") {
		_title = subject.contents[0].title;
		_desc = subject.contents[0].desc;
	}

	return (
		<div className="App">
			{/* <Subject title={subject.title} sub={subject.sub}></Subject> */}
			<header>
				<h1>
					<a
						href="/"
						onClick={function (e) {
							e.prevenetDefault();
							this.setState({
								mode: "welcome",
							});
						}.bind(this)}
					>
						{subject.title}
					</a>
				</h1>
				{subject.sub}
			</header>
			<TOC data={subject.contents}></TOC>
			<Content title={_title} desc={_desc}></Content>
		</div>
	);
}

// class App extends Component {
// constructor(props){
// super(props);
// 	this.state = {
// mode: "welcome",
// title: "WEB",
// 		subject:{title: 'WEB', sub: "world wide web!"},
// 		welcom: { title: "welcome", desc: "HEllo, React!!!" },
//		contents:[
//			{id:1, title:'HTML', desc: 'HTML is for information'}
//			{id:2, title:'CSS', desc: 'Css is for design'}
//			{id:3, title:'JavaScript', desc: 'JavaScript is for interactive'}
//		]
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
