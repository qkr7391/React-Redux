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
