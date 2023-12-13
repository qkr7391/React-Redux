# React

---

- React: JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where user interactions are dynamic and frequent.

* Customizing and tying together HTML code into one batch to make maintenance easier --> Component

---

## Development environment settings

- npm install(npm)
- create react app install(npx)

---

- npm run start

---

## JavaScript CODING

- index.html >>>

```HTML
<div id="root"></div>

```

- index.js >>> entry file

- App.js >>> Parts of the code that we actually need to touch.

\*\* The files are connected and call each other.

---

## CSS

- index.css

---

## React - Day 3

```HTML
<body>
		<h1>WEB</h1>
		WORLD WIDE WEB!
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

		<article>
			<h2>HTML</h2>
			HTML is HyperText Markup Language.
		</article>
	</body>
```

Q. What if there's millinon lines in here ?

- complex
- difficult to edit

* WITH REACT, make is simple and compact

```HTML
<body>
		<h1>WEB</h1>
		WORLD WIDE WEB!
		<List> </List>

		<article>
			<h2>HTML</h2>
			HTML is HyperText Markup Language.
		</article>
	</body>
```

---

### Make components

```JavaScript
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

function App() {
	return (
		<div className="App">
			<Subject></Subject>
		</div>
	);
}
```

---

### Component 2

```JavaScript
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

```

- By creating components, you can reduce the complexity of the code and organize it to make it easier to understand at a glance.

---

### props

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>

```JavaScript
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
```

---

- Refactoring

```JavaScript
class Subject extends Component {
	render() {
		return (
			<header>
				<h1>{this.props.title}</h1>
				{this.props.sub}
			</header>
		);
	}
}

function App() {
return (
    <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
```

---

### Separating into component files

Since all the components are in one JS file, as the functionality gets more complex, the code gets more complex and messy. Therefore, we need to separate these components into their own files.

```JavaScript
import componentName from "file/path";

class componentName extends Component {
	...
}

export defaule componentName;
```

---

### state & props

- props: Props, short for "properties," are a way to pass data from a parent component to a child component in React. They are similar to function arguments in that they allow you to pass values from one component to another. Props are immutable, which means that once they are passed to a component, they cannot be changed.

- state: State represents the internal state of a component. It's an object that stores data that can be changed within the component. State should only be used for data that is specific to a component and can't be computed from props. When the state of a component changes, React will re-render the component and its children.

- init - constructor [can use class]

```JavaScript
constructor(props){
	super(props);
...
}
```

> Differences Between React Props and React State:  
> Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function. Props are passed down from the parent component and are read-only within the child component, while state is only accessible within the component where it is defined. Props can be used to customize the behavior or appearance of a component, while state is used to keep track of information that can change over time.

<TOC>
```JavaScript
render() {
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while (i < data.length) {
			lists.push(
				<li key={data[i].id}>
					<a href={"/content/" + data[i].id}> {data[i].title}</a>
				</li>
			);
			i++;
		}
		return (
			<nav>
				<ul>{lists}</ul>
			</nav>
		);
	}
```
If multiple elements are created automatically, an error occurs. (Console)
-> Each list item must have a props roll, called a key.
[<li key={data[i].id}>]

\*\*\* The parent app is using internal information called state and passing it to the child via props.
The app doesn't need to know how the topic works internally. It only needs to know from the user's point of view, "What type of information should I pass to the props called data?".

---

### event state props render funcion

```JavaScript
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
```

- Depending on the value of the mode, the values assigned to \_title and \_desc will be different, and if they change, they will be rendered a new.

---

### event

ex) install event

```JavaScript
<header>
	<h1>
		<a href="/" onClick = {function(e){
			e.prevenetDefault();
		}}>{subject.title}</a>
	</h1>
	{subject.sub}
</header>
```

ex) change state with event

```JavaScript
<header>
	<h1>
		<a href="/" onClick = {function(e){
			e.prevenetDefault();
			this.setState({
				mode: 'welcome'
			});
		}.bind(this)}>{subject.title}</a>
	</h1>
	{subject.sub}
</header>
```

ex) bind

```JavaScript
<header>
	<h1>
		<a href="/" onClick = {function(e){
			console.log('event in', this);
			e.prevenetDefault();
			return;
			this.setState({
				mode: 'welcome'
			});
		}.bind(this)}>{subject.title}</a>
	</h1>
	{subject.sub}
</header>
```

[console]
var obj = {name: 'egoing'};
function bindTest() {
console.log(this.name);
}
bindTest();
--> undefined

vavr bindTest 2 = bindTest.bine(obj);
bindTest2();
--> egoing

1. function binding:
   This happens mostly in class components. When you use a function as a callback or event handler, it means that you want that function to be associated with an instance of the component. This way, inside the function, this will point to the component instance.

```JavaScript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me ({this.state.count})
      </button>
    );
  }
}
```

Like this, we bind the handleClick function to this in the constructor, so that when we call this.setState inside the handleClick function on button click, this points to the component instance.

2. Binding in a function component using Hooks:
   Function components don't use this like class components do. Instead, they use React Hooks, useState and useEffect, to manage their state and lifecycle. In function components, the concept of binding is less important, and instead we manipulate state through hooks.

```JavaScript
import React, { useState } from 'react';

function MyFunctionalComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Click me ({count})
    </button>
  );
}
```

In this case, the useState hook is used to create the count state, and the setCount function is used to change its value. The handleClick function is defined inside the function component, which itself forms a closure to access and change the count state.

\*\*\* To summarize, binding a function mainly means setting this correctly in the class component, and the function component uses React Hooks to manage its state and lifecycle.

ex) setState()

```JavaScript
<header>
	<h1>
		<a href="/" onClick = {function(e){
			console.log('event in', this);
			e.prevenetDefault();
			this.state.mode = 'welcome';
		}.bind(this)}>{subject.title}</a>
	</h1>
	{subject.sub}
</header>
```

```JavaScript
<header>
	<h1>
		<a href="/" onClick = {function(e){
			console.log('event in', this);
			e.prevenetDefault();
			this.setState({
				mode: 'welcome'
			});
		}.bind(this)}>{subject.title}</a>
	</h1>
	{subject.sub}
</header>
```

When changing the value of state in React, it's possible to change the value directly in the constructor via this.state. However, there are a number of important reasons why you should use setState() after the component has already been created:

Asynchronous processing and performance optimization:
setState() handles state changes asynchronously. This allows React to bundle multiple setState() calls into one to optimize performance, and allows multiple state changes to be processed in bulk with a single update.

Manage reloads efficiently:
With setState(), React schedules components to re-render at the appropriate time after a state change. In the process, it improves performance by updating only the parts that have changed.

Asynchronous, natural updates:
Because setState() works asynchronously, updating the state can take multiple calls in sequence. This enables natural and predictable state updates.

Lifecycle management and handling of side effects:
setState() allows you to handle side effects by taking as an argument a callback that runs after a state change. You can utilize this to perform any necessary actions after a state change.

While changing this.state directly in the constructor may be recommended for initial state setup, it's recommended that you use setState() inside your component to change state afterward. This is important for React's state management and rendering optimization.

---

### Making Component event

- When the Subject is clicked, call the onChangePage() function to set the new state

1. test

```JavaScript
<a
	href="/"
	onClick={function (e) {
		e.preventDefault();
		this.props.onChangePage();
	}.bind(this)}>
	{this.props.title}
</a>
```

```JavaScript
<Subject
	title={subject.title}
	sub={subject.sub}
	onChangePage={function() {
		alert("Hey");
	}.bind(this)}>
</Subject>
```

2. practice

```JavaScript
<Subject
	title={subject.title}
	sub={subject.sub}
	onChangePage={() => {
		setSubject({ ...subject, mode: "welcome" });
	}}></Subject>
```
