# && chain returns the first falshy value or the last truecy value

# || chain returns the first ture value or the last falsh value

Operator precedence
The AND operator has a higher precedence than the OR operator, meaning the && operator is executed before the || operator 


## rfc ==> reactFunctionComponent

```
import React from 'react'

export default function Header() {
  return (
    <div>Header</div>
  )
}

```



## rcc ==> reactClassComponent

```

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>Header</div>
    )
  }
}
```


props is the massager from the parent to child component