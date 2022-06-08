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

- Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

- React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the React documentation for further details.
[https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous]


Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value. So, you should not use code like this:

this.setState({
  counter: this.state.counter + this.props.increment
});
Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
You can also use a form without props if you need only the state:

this.setState(state => ({
  counter: state.counter + 1
}));
Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.


## lifecycle hooks

some of the main lifecycle methods: 

- componentWillMount()  emoved in version 17  The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. 
- componentDidMount() 
- shouldComponentUpdate() 
- componentDidUpdate() 
- componentWillUnmount()


componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

This challenge has you modifying two lifecycle methods componentDidMount and componentWillUnmount. You use componentDidMount when you want to set something up, in your case, an event listener. You use componentWillUnmount when you need to clear that something, your event listener.



### Optimize Re-Renders with shouldComponentUpdate

So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.


## rendering on the server?

- First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines.
- Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

# Redux

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.