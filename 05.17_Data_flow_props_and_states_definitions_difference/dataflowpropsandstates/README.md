# react state

## if state changed, react will rerender page


- step 1

```
import React, {useState} from 'react';
```

- step 2
then we can have those code in our component function

```
const [acc, funcToSetAcc] = useState(init value of acc) ==> looks like reduce
```

- step 3
then we can use state ,also in component function, e.p

```
const [acc, changeAcc] = useState(true)

clickHandler = e => changeAcc(!acc);
return (
    <div>
    <button onClick={clickHandler}></button>
    </div>
)
```