// * THE EVENT OBJECT

// When an event listener is triggered and calls its associated function, it automatically passes a single ARGUMENT to the function
// This argument is a reference to the event object
// The event object contains a number of properties that describe the event which occurred

// ===============================================================================================

let 
green = document.querySelector('div.green')
,red=document.querySelector('.red')
,blue=window.document.querySelector('.blue')
,yellow=document.querySelector('.yellow')

//function
function clickAlert(str){
    alert(str)
}


// listener is the callback function
green.addEventListener('click',(e)=>{   
    // console.log(e.target.style.backgroundColor);
    if(e.target.style.backgroundColor=='pink'){
        alert(' remove blue \n change my BGC to black');
        blue.remove();
        e.target.style.backgroundColor='black'
            // green(element) == e.target ==> true
    } else if (e.target.style.backgroundColor == "black") {
        alert("black");
        }  else{
        alert("Green");
    }
})

red.addEventListener('click',()=>clickAlert('red'), {once: true}) // only triger once

blue.addEventListener('click',(event)=>{
    console.log(event);
    clickAlert("This will change the 'green' cube in pink");
    green.innerText='Elements battle start';
    green.style='background-color: pink;color: white'


})

// yellow.addEventListener('mouseover', ()=>clickAlert('yellow'))


// ----------------------------
const keys =[
    {keyCode: 65, value: "a"},
    {keyCode: 13, value: "enter"}
]


// window.addEventListener('keydown', (e)=>{
//     console.log(e.keyCode);
//     console.log(e.keyCode);
//     console.log(e.key);
//     for(let key of keys){
//         if(e.keyCode== key.keyCode) alert(key.value);
//     }
// })


// addEventListener (submit event)

// * preventDefault()
// One extra useful thing to know about events is that we can prevent the default behaviour of the target element!
// E.g. if we have a checkbox, when it is clicked, it is checked/unchecked by DEFAULT.
// * We can prevent this behavior with preventDefault()
let loginForm = document.querySelector('.login')

loginForm.addEventListener('submit',e=>{
    e.preventDefault()
    let emailValue = e.target.email.value
    , passwordValue = e.target.password.value

    const data={emailValue,passwordValue};
    console.log(data);

    alert('email: '+emailValue+'\npassword: '+passwordValue);
})


// this not working
// loginForm.addEventListener('keydown',e=>{
//     // e.preventDefault()
//     let emailValue = e.target.email.value
//     , passwordValue = e.target.password.value

//     const data={emailValue,passwordValue};
//     console.log(data);

//     alert('email: '+emailValue+'\npassword: '+passwordValue);
// })