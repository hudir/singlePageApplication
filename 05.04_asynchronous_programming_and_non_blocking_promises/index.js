// setTimeout
// the global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires

                // after 3 second ,execute the function ==> log the string
// setTimeout(()=>{console.log("Data returned from server");},3000)

const getDataUnsuccessfully=()=>{
    let data;
    setTimeout(()=>{
        data='Lots of data';
        return data;
    },5000);
    
};

let returnedData = getDataUnsuccessfully();
// returnedData=setTimeout(()=>{return getDataUnsuccessfully()}, 6000)
// console.log(returnedData);

// ---------------------------------------------------

let error = true;
const getDataUnsuccessfully1 = () => {
                        // functions 
    let output = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(!error){
                resolve('Lots of data Success') // pass str to the function if everything ok
            }
            reject('We have an error') // pass str to the function if error

        }, 2000);
    })

    return output
};

const promise = getDataUnsuccessfully1();
// console.log(promise);  // Promise { <pending> }

promise
.then(output=>{
    // console.log(output)
})
.catch(output=>{
    // console.log(output);
})


// ---------------------------------------------------

let blackFriday = true;
blackFriday = false;

function amazonPromise(){
    return new Promise((resolve,reject)=>{
        // rejected
        if(blackFriday) reject('Sorry for not sending your article on time');
        // fulfilled
        resolve('this is your product as promised')
    })
}

const promise_1 = amazonPromise();
// console.log(promise_1);

// promise_1.then(resolveMSG=>console.log(resolveMSG),rejectMSG=>console.log(rejectMSG))

// ---------------------------------------------------

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
Promise.resolve('foo')
  // 1. Receive "foo" concatenate "bar" to it and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
    //   console.log(string); // foobarbaz
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asynchronous code in the
  // prior then block.
  .then(function(string) {
    // console.log("Last Then:  oops... didn't bother to instantiate and return " +
                // "a promise in the prior then so the sequence may be a bit " +
                // "surprising");
  // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    // console.log(string); // foobar
});


// ---------------------------------------------------
Promise.resolve()
  .then( () => {
    // 使 .then() 回傳一個被否決的 Promise
    throw 'Oh no!';
  })
  .then( () => {
    console.log( 'Not called.' );
  }, reason => {
    // console.error( 'onRejected function called: ', reason );
  });  //onRejected function called:  Oh no!


// ---------------------------------------------------
  Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .catch( reason => {
    console.error( 'onRejected function called: ', reason );
  })
  .then( () => {
    console.log( "I am always called even if the prior then's promise rejects" );
  });