// import { createStore } from "redux";

// //reducer
// export default createStore(function (state, action) {
// 	return state;
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

import { createStore } from "redux";

const reducer = function (state, action) {
	if (state === undefined) {
		return { number: 0 };
	}
	if (action.type === "INCREMENT") {
		// return { number: state.number + action.size };
		return { ...state, number: state.number + action.size };
	}
	return state; // Your actual logic goes here
};

export default createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
