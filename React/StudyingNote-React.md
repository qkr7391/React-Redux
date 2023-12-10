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
