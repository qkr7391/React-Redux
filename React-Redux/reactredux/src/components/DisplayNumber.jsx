import React, { Component } from "react";

export default class DisplayNumber extends Component {
	render() {
		return (
			<div>
				<h1>Display number</h1>
				<input type="button" value="+"></input>
				<input type="text" value="0"></input>
			</div>
		);
	}
}
