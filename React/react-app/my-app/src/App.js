import React, { Component, useState } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

function App() {
	const [subject, setSubject] = useState({
		mode: "welcome",
		selected_content_id: null,
		max_content_id: null,
		title: "WEB",
		sub: "world wide web!",
		welcome: { title: "welcome", desc: "Hello, React!!!" },
		contents: [
			{ id: 1, title: "HTML", desc: "HTML is for information" },
			{ id: 2, title: "CSS", desc: "CSS is for design" },
			{ id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
		],
	});

	function getReadContent() {
		var i = 0;
		while (i < subject.contents.length) {
			var data = subject.contents[i];
			if (data.id === subject.selected_content_id) {
				return data;
				break;
			}
			i++;
		}
	}

	function getContent() {
		var _title,
			_desc,
			_article = null;

		if (subject.mode === "welcome") {
			_title = subject.welcome.title;
			_desc = subject.welcome.desc;
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
		} else if (subject.mode === "read") {
			var _content = getReadContent();
			_article = (
				<ReadContent title={_content.title} desc={_content.desc}></ReadContent>
			);
		} else if (subject.mode === "create") {
			_article = (
				<CreateContent
					onSubmit={(_title, _desc) => {
						// console.log(_title, _desc);
						subject.max_content_id = subject.contents.length + 1;
						var _contents = subject.contents.concat({
							id: subject.max_content_id,
							title: _title,
							desc: _desc,
						});
						setSubject({
							...subject,
							contents: _contents,
						});
					}}
				></CreateContent>
			);
		} else if (subject.mode === "update") {
			_content = getReadContent();
			_article = (
				<UpdateContent
					data={_content}
					onSubmit={(_title, _desc) => {
						// console.log(_title, _desc);
						subject.max_content_id = subject.contents.length + 1;
						var _contents = subject.contents.concat({
							id: subject.max_content_id,
							title: _title,
							desc: _desc,
						});
						setSubject({
							...subject,
							contents: _contents,
						});
					}}
				></UpdateContent>
			);
		}
		return _article;
	}

	return (
		<div className="App">
			<Subject
				title={subject.title}
				sub={subject.sub}
				onChangePage={() => {
					setSubject({ ...subject, mode: "welcome" });
				}}
			></Subject>
			<TOC
				onChangePage={(id) => {
					setSubject({
						...subject,
						mode: "read",
						selected_content_id: Number(id),
					});
				}}
				data={subject.contents}
			></TOC>
			<Control
				onChangeMode={(_mode) => {
					setSubject({
						...subject,
						mode: _mode,
					});
				}}
			></Control>
			{getContent()}
		</div>
	);
}

export default App;
