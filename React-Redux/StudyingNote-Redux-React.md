# React-Redux

---

- React: a technology that allows you to create systematic and well-organized applications by creating custom tags, i.e. components.

- Redux: a technology that reduces the possibility of data being transformed in an unpredictable direction by centrally managing the state.

- Technology that reduces the complexity of development.

---

![Alt text](<Screenshot 2023-11-29 at 6.19.13 PM.png>)

- React is like a rumor.
  React is like a society made up of components, and if a change occurs (data representing the change is generated), the change is transmitted to all components. --> Performance deteriorates because the render function is called.

- As applications become more complex, it becomes more difficult to construct them using only React.

- React is like a rumor.
  React is like a society made up of components, and if a change occurs (data representing the change is generated), the change is transmitted to all components. --> Performance deteriorates because the render function is called.

As applications become more complex, it becomes more difficult to construct them using only React.

- Redux is like media.
  When a change occurs, the change can be easily communicated by notifying the media outlet called Redux's store.

- However, both have the inefficiency of being delivered to members who do not need it.

- Therefore, by using React-Redux, a library that connects React and Redux, the news can be delivered only to the members who need it.

---

## Study Plan

1. simple react component structure without redux

2. react component state connect without redux

3. Add redux

---

## simple react components structure without redux

- Divided components by 'AddNumberRoot', 'AddNumber', 'DisplayNumberRoot', and 'DisplayNumber'

---

## react components state connect without redux

- You can use props when passing data from parent to child, and pass callback functions as props when passing data from child to parent to update the parent's state.

```JavaScript
<AddNumberRoot
  onClick={function (size) {
    this.setState({ number: this.state.number + size });
  }.bind(this)}
></AddNumberRoot>
```

--> In the AddNumberRoot component, we are passing a function through the onClick prop. The function takes a parameter named size and its job is to increment the current state of number by size.

```JavaScript
<AddNumber
  onClick={function (size) {
    // alert("size : " + size); //->test
    this.props.onClick(size);
  }.bind(this)}
></AddNumber>
```

--> The AddNumber component is also passing a function through the onClick prop. This function is responsible for taking a size and passing that size to the parent component.

```JavaScript
<input
  type="button"
  value="+"
  onClick={function () {
    this.props.onClick(this.state.size);
  }.bind(this)}
></input>

<input
  type="text"
  value={this.state.size}
  onChange={function (e) {
    this.setState({ size: Number(e.target.value) });
  }.bind(this)}
></input>
```

--> Inside the AddNumber component, we're using the input element to set and pass values: when the + button is pressed, we call this.props.onClick(this.state.size) to pass the size value to the parent component, and we manipulate the size value through the input element.

\*\*\* A structure that interacts between the AddNumberRoot and the AddNumber component, and passes state within the AddNumber component to the parent component. This allows you to implement a data flow where data is passed from parent to child, and child to parent.
