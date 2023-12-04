import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
	render() {
		return (
			<header>
				<h1>WEB</h1>
				WORLD WIDE WEB!
			</header>
		);
	}
}

class TOC extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<a href="1.html"> HTML</a>
					</li>
					<li>
						<a href="2.html"> CSS</a>
					</li>
					<li>
						<a href="3.html"> JAVASCRIPT</a>
					</li>
				</ul>
			</nav>
		);
	}
}

class Content extends Component {
	render() {
		return (
			<article>
				<h2>HTML</h2>
				HTML is HyperText Markup Language.
			</article>
		);
	}
}

function App() {
	return (
		<div className="App">
			<Subject></Subject>
			<TOC></TOC>
			<Content></Content>
		</div>
	);
}

// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<Subject></Subject>
// 			</div>
// 		);
// 	}
// }

export default App;
