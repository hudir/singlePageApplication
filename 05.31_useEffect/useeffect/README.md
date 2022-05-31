https://dmitripavlutin.com/react-useeffect-explanation/
```
useEffect(callback[, dependencies]);
```

Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().


- A) Not provided: the side-effect runs after every rendering.

import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });  
}
- B) An empty array []: the side-effect runs once after the initial rendering.

import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
- C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.

import { useEffect, useState } from 'react';
function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}


- Some side-effects need cleanup: close a socket, clear timers.

If the callback of useEffect(callback, deps) returns a function, then useEffect() considers this as an effect cleanup:


Cleanup works the following way:

A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.

C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

Note that the callback argument of useEffect(callback) cannot be an async function. But you can always define and then invoke an async function inside the callback itself:
```
import { useEffect, useState } from 'react';
function FetchEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/employees');
      const fetchedEmployees = await response.json(response);
      setEmployees(fetchedEmployees);
    }
    fetchEmployees();
  }, []);
  return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}
```