# props

- pass data
- props are read-only, never change props inside component ? 

# state

- "state" is an important concept when is comes to understanding how react works... if we try to update our app using traditional variables, it won't change in the browser
- react will only re-render the UI when it is TOLD to do so - it won't do this automatically
- a state can store some 'remembers data' and can update over time
- the state of a react component at a certain time is like a "snapshot", a 'photograph' of the state of that component at the time
- state management ==> keep track of how the data in our application changes over time
- if we update tje state , react re-render UI to account for what changed / to show the latest information

- we can use state hook in rfc or rcc since 2019


## hook

- a React hook is a way of declaring and managing a value that your functional component needs to keep track of over time.

```
[the first variable to "keep track of" , a function will let us change the first variable's value] = useState(init value(null || 0 || '' || true || {} || [] || 0 ))
```