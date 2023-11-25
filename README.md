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
