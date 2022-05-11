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
