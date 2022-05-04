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
    console.log(output)
})
.catch(output=>{
    console.log(output);
})