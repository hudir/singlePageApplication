# singlePageApplication

# react 

## Component and JSX

https://www.freecodecamp.org/news/react-beginner-handbook

A component can have its own state, which means it encapsulates some variables that other components can't access unless this component exposes this state to the rest of the application.

A component can also receive data from other components. In this case we're talking about props.

We call JSX everything wrapped inside the parentheses returned by the component:
This looks like HTML, but it's not really HTML. It's a little different.

Under the hood, React will process the JSX and it will transform it into JavaScript that the browser will be able to interpret.

So we're writing JSX, but in the end there's a translation step that makes it digestible to a JavaScript interpreter.

React gives us this interface for one reason: it's easier to build UI interfaces using JSX.


- ReactDOM.render(componentToRender, targetNode),
- In fact, the naming convention for all HTML attributes and event references in JSX become camelCase.
- In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed.

a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null

```
class ComponentName extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (HTML (from JSX)) or null
    }
}

// call a component
<ComponentName />

const JSX=<div />
// call a JSX
{JSX}
```

```
<div />
```
 ==> no content
```
<div>Some Content</div>
``` 
==> wíth content


## props

```
const Welcome = props => <h1>Hello, {props.user}!</h1>
<App>
   <Welcome user='Mark' />
</App>


MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.

```
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```
n the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';


For this solution you need to remember first how to add props to your parent component:

 <Welcome name="Jessica"/>
Once you have the prop set, you can use this.props in your child component.

 <p>Hello, <strong>{this.props.name}</strong>!</p>
Full Solution

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Jessica"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```


# useEffect

When you call the hook, you pass it a function. The function will be run by React when the component is first rendered, and on every subsequent re-render/update.

React first updates the DOM, then calls any function passed to useEffect().

All without blocking the UI rendering, even on blocking code.

```
const { useEffect, useState } = React

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```


Since the useEffect() function is run on every subsequent re-render/update of the component, we can tell React to skip it, for performance purposes. We do this by adding a second parameter which is an array that contains a list of state variables to watch for.

React will only re-run the side effect if one of the items in this array changes.

```
useEffect(() => {
  console.log(`Hi ${name} you clicked ${count} times`)
}, [name, count])
```


Similarly, you can tell React to only execute the side effect once (at mount time), by passing an empty array:

```
useEffect(() => {
  console.log(`Component mounted`)
}, [])
```


## set default props and props types

```
const Camper=(props)=>{
  return (
    <p>{props.name}</p>
  )
}

Camper.defaultProps = {name: 'CamperBot' }
Camper.propTypes = {
  name: PropTypes.string.isRequired
}
```
[ddd]https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


# state

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.