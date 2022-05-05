```
async function funcName(){

  try {
      let vairable = await (promise)  // not get a promise but the result of it
      let vairable1 = await (promise1) // if there is error, try{} block will stop excuting and jump to catch{} block
  } catch(error) {
      dosth with error
  }
}

const funcName = async () => {

}
```