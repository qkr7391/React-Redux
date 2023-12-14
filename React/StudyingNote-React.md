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

### event state props render function

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

### Making Component event_01

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

---

### Making Component event_02

- Use events from a child component to change the state of the parent component.

Pass event to props -> make child component fire event when clicked -> change parent component's state via event -> render -> pass changed props to child component -> application dynamically changes.

- When clicking on a TOC item, change the mode to read and display its contents

```JavaScript
<a
	href={"/content/" + data[i].id}
	onClick={function (e) {
		e.preventDefault();
		this.props.onChangePage();
	}.bind(this)}
>
	{data[i].title}
</a>
```

-> Inside the onClick function of the A tag, information about the selected a should be passed to the parent component.
(>> App can change state with setState() and run render())

```JavaScript
<TOC
	onChangePage={() => {
		setSubject({ ...subject, mode: "read" });
	}}
	data={subject.contents}
></TOC>
```

---

### Makind Component event_03

```JavaScript
<a
	href={"/content/" + data[i].id}
	data-id={data[i].id}
	onClick={function (e) {
		e.preventDefault();
		this.props.onChangePage(e.target.dataset.id);
	}.bind(this)}>{data[i].title}
</a>
```

-> Use events to convey information.

- An event has a property called target.
- It contains information about the target where the event happened.
- To get the information via event.target, we create a data-id attribute on the a tag and pass it as a parameter to this.props.onChanePage()

```JavaScript
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
```

--> Extract a value from e to target.dataset.id when firing an event on a property called onclick

- How not to use the property
  If you put data[i].id as the second argument in ->bind, it will be put as the first parameter value. Anything that already exists will be pushed back by one space.

```JavaScript
<a
	href={"/content/" + data[i].id}
	data-id={data[i].id}
	onClick={function (id, e) {
		e.preventDefault();
		this.props.onChangePage(e.target.dataset.id);
	}.bind(this, data[i].id)}>{data[i].title}
</a>
```

--> Function(id) stores the variable passed in id, and setState(=setSubject) assigns selected_content_id to the id value passed in.

The value of the Data-id property is a string, so we convert it to a number with Number(id).

When the state is changed through setState(=setSubject), the render function is called, and the page is re-rendered with the changed state.

---

### Organizing concepts

- props vs state
  Props are values that are given to a component from the outside in, while state is something that can be changed from the inside out.
  Props are values that you pass internally, so their value shouldn't change, so they are read-only.
  Both Props and state call the render() function

- Use props when issuing commands from a parent component to a child component

- Use event when you want to change a value from the child component to the parent component.

---

### create Implementation 01

- I'm going to put the Create, Update, and Delete buttons between the TOC and Content items.

![Alt text](<Screenshot 2023-12-13 at 4.28.13 PM.png>)

Function of the [Create] button

- When clicked, the App component's mode will change to 'create' and the

- The component that is being used in 'read' mode in Content will be replaced with a component that can be used in 'create' mode.

- Inside the component is a form, and when you enter data into the form and click Save, the App component will store the new component information as an object in the list of contents [id, title, desc].

- The content displayed in the TOC will also change

---

### create Implementation 02

- change mode

Call the onChangeMode function on the a tag of each list in the Control and send 'create', 'update', and 'delete' as parament, respectively

```JavaScript
<a
	href="/create"
	onClick={(e) => {
		e.preventDefault();
		this.props.onChangeMode("create");
	}}
>
```

The onChangeMode function changes the Mode based on the parameters it receives

---

### create Implementation 03

- Changing the content to a component that will be used in the 'read' when the 'create' button is pressed

- Change the content part to a new {\_article} variable -> to make it reactive to incoming values.

```JavaScript
<div>
...
{_article}
</div>
```

- Change the content part to a new {\_article} variable -> to make it reactive to incoming values.
- Assign the newly created \_article variable the correct value based on the conditions

1. mode === "welcome"/"read"
   -> <ReadContent> (change the existing Content to ReadContent)
2. mode === "create"
   -> <CreateContent>

```JavaScript
if (subject.mode === "welcome") {
...
	_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
} else if (subject.mode === "read") {
...
	_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
} else if (subject.mode === "create") {
	_article = <CreateContent></CreateContent>;
}
```

\*\* Making Form for creating

```JavaScript
<form
	action="/create_process"
	method="post"
	onSubmit={(e) => {
		e.preventDefault();
		alert("Submit");
	}}
>
```

- action="create_process": This attribute specifies the URL where the form data will be submitted when the form is submitted. In this case, it's set to /create_process.

- method="post": This attribute specifies the HTTP method used when submitting the form. post is commonly used to send data to the server in a way that's not visible to the user (in the URL).

- onSubmit={(e) => {...}}: This is an event handler that triggers when the form is submitted. The onSubmit event occurs when the form is submitted. In this case, it's preventing the default form submission behavior using e.preventDefault(), which stops the form from submitting the traditional way (e.g., navigating to a new page or performing a full-page reload). Instead, it executes the function provided inline.

- e is the event object.

- e.preventDefault() prevents the default form submission behavior.

- alert("Submit"): This line triggers an alert dialog displaying "Submit" when the form is submitted. This is just an example; usually, this would be where you handle form data, make AJAX requests, or perform other actions based on the form submission.

---

### Adding new content

Adding newly created content to an existing list

- Press the Create button to create the data, then press the submit button to call and execute the onSubmit() function so that the data is added to the existing list of content.

- Create an onSubmit() function in the CreateContent component and send values for title and desc

```JavaScript
onSubmit={(e) => {
	e.preventDefault();
	// debugger;
	this.props.onSubmit(e.target.title.value, e.target.desc.value);
}}
```

- Verify that the App component receives those values

```JavaScript
_article = (
	<CreateContent
		onSubmit={(_title, _desc) => {
		  console.log(_title, _desc);
		}}
	></CreateContent>
);
```

- Takes the length of the existing contents and assigns one new value to the new length, does not modify the existing contents value, creates a new duplicate value, and changes the value using setState(=setSubject).

```JavaScript
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
```

\*\* Why you [concat] instead of [push]?
--> When using setState() to change the state of an array, concat() is preferred over push() because it preserves immutability.

When changing state in React, it is recommended to change the previous state by creating a new object or array. The push() method adds a new element to the array, while concat() returns a new array. The main differences here are

Immutability:

Push(): Modifies the original array itself by adding elements to an existing array.
CONCAT(): creates a new array, adds elements to an existing array, and returns it. The existing array remains unchanged.
Because push() modifies the existing array itself, React requires that state changes create a new state without directly modifying the old state, which is important for maintaining immutability.

Performance and predictability:
Since concat() returns a new array, it creates a new array without changing the original array, which helps React optimize performance by maintaining state immutability and comparing it to the previous state.

---
