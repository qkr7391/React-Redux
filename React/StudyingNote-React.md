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
