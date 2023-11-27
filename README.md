# Redux

: A predictable state container for JavaScript apps.

---

## Redux Study - Day 1

# Redux

: A predictable state container for JavaScript apps.

---

## Redux Study - Day 1

- Predictable
- Centralized
- Debuggable
- Flexible

Redux is a pattern and library for managing and updating application state, using events called "actions".
It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

store [state | reducer | dispatch, subscribe, getState]
render

- state = state

- reducer = function

- getState = get state from state and send it to render

- render = ask state by using getState and get state and show UI

- subscribe = when state is changed, send make render can get new state every time

- dispatch =

  1. call reducer and change state (sent action data and state of now)

  2. call subscribe and make render get a new state

---

### withoutRedux.html

It is a simple html file that has 3 boxes when click the fire button, change all the boxes' colors.
This feature requires code for each box to change the color of the other boxes when a button is clicked, and as the number of boxes increases, so does the amount of code required.

```html
<input
	type="button"
	value="fire"
	onclick="
document.querySelector('#component_red').style.backgroundColor = 'red';
document.querySelector('#component_green').style.backgroundColor = 'red';
document.querySelector('#component_blue').style.backgroundColor = 'red';
"
/>
```

To reduce the waste of this code, we used redux to generate new code.

---

### withRedux.html

First, an object called Redux was created and an API called createStore() was created. createStore() requires a reducer as input.

So we created a function reducer. This reducer will create a new state by referencing the existing state and action when an action comes in via dispatch.

Also, since the initial store creation requires an initial value, we set it in the reducer.

```html
function reducer(state, action) { //initial value if (state == undefined) {
return { color: "yellow" }; } } var store = Redux.createStore(reducer);
```

It takes the state and sets it as the initial background style.

```html
function red() { var state = store.getState();
document.querySelector("#red").innerHTML = `
<div
	class="container"
	id="component_red"
	style="background-color:${state.color}"
>
	...}
</div>
```

---

## Redux Study - Day 2

1. dispatch : Dispatch allows you to create new state values by referencing actions and state values.
   When creating these new values, the reducer does not overwrite the existing state values, but rather creates and assigns a new state value and returns a new value, so that each state value can be maintained independently.

```html
function reducer(state, action) { ... var newState; if (action.type ===
"CHANGE_COLOR") { newState = Object.assign({}, state, { color: "red" }); }
return newState; }
```

- Object.assign({A}, {B}, {C});
  > How to assign the properties of B and C to an empty A object.

```html
Object.assign({}, state, { color: "red" });
```

- Predictable
- Centralized
- Debuggable
- Flexible

Redux is a pattern and library for managing and updating application state, using events called "actions".
It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

store [state | reducer | dispatch, subscribe, getState]
render

- state = state

- reducer = function

- getState = get state from state and send it to render

- render = ask state by using getState and get state and show UI

- subscribe = when state is changed, send make render can get new state every time

- dispatch =

  1. call reducer and change state (sent action data and state of now)

  2. call subscribe and make render get a new state

---

### withoutRedux.html

It is a simple html file that has 3 boxes when click the fire button, change all the boxes' colors.
This feature requires code for each box to change the color of the other boxes when a button is clicked, and as the number of boxes increases, so does the amount of code required.

```html
<input
	type="button"
	value="fire"
	onclick="
document.querySelector('#component_red').style.backgroundColor = 'red';
document.querySelector('#component_green').style.backgroundColor = 'red';
document.querySelector('#component_blue').style.backgroundColor = 'red';
"
/>
```

To reduce the waste of this code, we used redux to generate new code.

---

### withRedux.html

First, an object called Redux was created and an API called createStore() was created. createStore() requires a reducer as input.

So we created a function reducer. This reducer will create a new state by referencing the existing state and action when an action comes in via dispatch.

Also, since the initial store creation requires an initial value, we set it in the reducer.

```html
function reducer(state, action) { //initial value if (state == undefined) {
return { color: "yellow" }; } } var store = Redux.createStore(reducer);
```

It takes the state and sets it as the initial background style.

```html
function red() { var state = store.getState();
document.querySelector("#red").innerHTML = `
<div
	class="container"
	id="component_red"
	style="background-color:${state.color}"
>
	...}
</div>
```

---

## Redux Study - Day 2

1. dispatch : Dispatch allows you to create new state values by referencing actions and state values.
   When creating these new values, the reducer does not overwrite the existing state values, but rather creates and assigns a new state value and returns a new value, so that each state value can be maintained independently.

```html
function reducer(state, action) { ... var newState; if (action.type ===
"CHANGE_COLOR") { newState = Object.assign({}, state, { color: "red" }); }
return newState; }
```

- Object.assign({A}, {B}, {C});
  > How to assign the properties of B and C to an empty A object.

```html
Object.assign({}, state, { color: "red" });
```

Conclusion : When it receives an action, it passes it to the store via dispatch, and the store calls the reducer to change the state value.

---

## Redux Study - Day 3

### Subscibe

Today's : Whenever the state value changes, the UI should change, so we need to call render to change the UI.

- Sign up render for a subscription

- Call red() every time the state changes

```html
store.subscribe(red);
```

---

### No Redux

- They are strongly coupled to each other.
- Dependencies

Each component sets up changes to the other components, so if one component is removed or added, all code must be modified.

### Redux

- Centralized management through a "relay" called Redux

- Each component uses a

1. when the state changes, dispatch an (action) to the store indicating that the state has changed.
2. code how they should change accordingly and subscribe to the store.
   > Get notified whenever the state changes -> Can make UI changes whenever the state changes

Each component doesn't need to care about the others. It only needs to care about itself.

Conclusion : Using Subscribe, whenever the state changes, render is notified of the change and gets the new state value to change the UI.

### Extra - Redux(Time Traveling)

Chrome - add 'Redux Dev Tools' extension - add 'window.**REDUX_DEVTOOLS_EXTENSION** &&
window.**REDUX_DEVTOOLS_EXTENSION**()' to stroe

```html
var store = Redux.createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());
```

'Immutability' : Why the original's state value should never be changed directly.

Redux

- Keep all the state you need to manage in a store
- Single store (keep only one store)
- The store is processed by the reducer.

---

## Redux Study - Day 4

### Practice - Static Web page #1

simple setting

```HTML
<body>
<header>
<h1>WEB</h1>
Hello, WEB!
</header>
<nav>
<ol>
<li><a href="1.html">HTML</a></li>
<li><a href="2.html">CSS</a></li>
</ol>
</nav>
<article>
<ul>
<li><a href="/creat">create</a></li>
<li><input type="button" value="delete" /></li>
</ul>

<h2>HTML</h2>
HTML is ...
</article>
</body>
```

What if you had 100 million lines of code in each section? If you had all your code in one file, it would be messy and hard to modify. To improve this, we need to "modularize" each part.

1. #subject

```HTML
<div id="subject"></div>
<script>
function subject() {
document.querySelector("#subject").innerHTML = `
<header>
<h1>WEB</h1>
Hello, WEB!
</header>
`;
}

...

subject();
...
</script>
```

2. #TOC

```HTML
<script>
...
function TOC() { document.querySelector("#toc").innerHTML = `
<nav>
<ol>
<li><a href="1.html">HTML</a></li>
<li><a href="2.html">CSS</a></li>
</ol>
</nav>
`; }
...
TOC();
</script>
```

3. #control

```HTML
<script>
...
function control() {
document.querySelector("#control").innerHTML = `
<ul>
<li><a href="/creat">create</a></li>
<li><input type="button" value="delete" /></li>
</ul>
`;
}
...
control();
</script>
```

4. #content

```HTML
<script>
...
function content() {
document.querySelector("#content").innerHTML = `
<article>
<h2>HTML</h2>
HTML is ...
</article>
`;
}
...
content();
</script>
```

- Readability
- Recyclability

---

## Redux Study - Day 5

### Practice - Static Web page #2

To take advantage of redundancy

1. create a store

2. create a reducer that should be sent to the store
   2.1 In the reducer that is executed once after the store is created and regardless of the action value, the state value is undefined, and the initial value should be set at that time.

   2.2 As the initial value, you can set the value that the application will need for the first time.

```JavaScript
	function reducer(state, action) {
		if (state === undefined) {
			return {contents:[
				{id:1, title:'HTML', desc:'HTML is...'}
				{id:2, title:'CSS', desc:'CSS is...'}
			]};
		}
		return;
	}

	var store = Redux.createStore(reducer);
```

![Alt text](<Screenshot 2023-11-27 at 12.13.49 AM.png>)

---

EX)) TOC();

Takes a status value and creates as many <li> tags as there are contents in the status value.

```JavaScript
function TOC() {
				var state = store.getState();
				var i = 0;
				var liTags = "";
				while (i < state.contents.length) {
					liTags += `
					<li><a href="${state.contents[i].id}">${state.contents[i].title}</a></li>
					`;
					i++;
				}
				document.querySelector("#toc").innerHTML = `
			             <nav>
			                 <ol>${liTags}</ol>
			             </nav>
			             `;
			}
```

> Each component fetches a state value from the store and generates HTML code based on that state value, allowing you to create web pages that are generated based on that state.

---

## Redux Study - Day 6

### Practice - Static Web page #3

Change the state value for store

1. generate an action
   1.1 Prevent move <a> tag

   ```HTML
   <a onclick = "event.preventDefault();"
   						href="${state.contents[i].id}">
   						${state.contents[i].title}
   						</a>
   ```

   1.2 Make an action
   **_(The required properties in an action are of type)_**

   ```JavaScript
   var action = {type:'SELECT', id:${state.contents[i].id}}
   ```

   1.3 Give actions to your store's dispatches --> store calls reducer

   ```JavaScript
   store.dispatch(action);
   ```

2. the action executes the reducer via dispatch

   2.1 Assign a new value to a new object when the action value in the reducer is 'SELECT'

   ```JavaScript
   var newState;
   ```

   2.2 State values should always be returned as cloned values

   ```JavaScript
   if (action.type === "SELECT") {
   				newState = Object.assign({}, state);
   			}
   ```

3. the reducer produces a new value for the state

   ```JavaSCript
   var newState;
   			if (action.type === "SELECT") {
   				newState = Object.assign({}, state, { selected_id: action.id });
   			}
   			return newState;
   ```

4. when the state value changes, call the subscribed functions

5. update the UI

---

## Redux Study - Day 7

### Practice - Static Web page #4

Change contents according to state.id value

```JavaScript
function content() {
	var state = store.getState();
	var i = 0;
	var aTitle, aDesc;
	while (i < state.contents.length) {
		if (state.contents[i].id === state.selected_id) {
			aTitle = state.contents[i].title;
			aDesc = state.contents[i].desc;
			break;
		}
		i++;
	}
	document.querySelector("#content").innerHTML = `
			<article>
				<h2>${aTitle}</h2>
				${aDesc}
			</article>
		`;
}
```

**_ When selected_id === null (init), contents will be none. _**

Give action when click create

1. Make mode attribute to state object for distinguish mode

```JavaScript
if (state === undefined) {
	return {
		mode: "create",
		selected_id: null,
		contents: [
			{ id: 1, title: "HTML", desc: "HTML is..." },
			{ id: 2, title: "CSS", desc: "CSS is..." },
		],
	};
}
```

2. Distinguish depends on mode after getState();

3. dispatch(action) to store

```HTML
<form onsubmit="event.preventDefault();
var _title = this.title.value;
var _desc = this.desc.value;
store.dispatch({type:'CREATE', title:_title, desc: _desc})
">
```

4. distinguish action

```JavaScript
var newState;
if (action.type === "SELECT") {
	newState = Object.assign({}, state, { selected_id: action.id });
}
else if (action.type === "CREATE") {
	var newMaxId = state.max_id + 1;
	var newContents = state.contents.concat();
	newContents.push({
		id: newMaxId,
		title: action.title,
		desc: action.desc,
	});
	newState = Object.assign({}, state, {
		max_id: newMaxId,
		contents: newContents,
		mode: "read",
	});
}
```

5. Give Subscribe to TOC and adding new contents on the list

```JavaScript
store.subscribe(TOC);
```
