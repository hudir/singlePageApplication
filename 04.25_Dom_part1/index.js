
// window.alert('Hi')
console.log(window);
// console.log(document);


// let userName = window.prompt("Hi, what's your name?")
// if(userName) alert(`Welcome ${userName}`)
// alert(`Welcome ${userName}`)

const greeting =()=>{
    let username = prompt('what`s your name?');
    alert(`Welcome ${username}`)
};
// greeting()
// ===============================

let about = document.getElementById('about')
about.style='background-color: rgb(100,100,100)'

// getElementsByClassName get an Array, but can't use arr methods
let spanBtnArr = document.getElementsByClassName('menuBtn')
console.log(spanBtnArr);
spanBtnArr[0].style='background-color: rgb(100,200,200)' // this will work

// spanBtnArr.forEach(el=>el.style='background-color: rgb(100,200,200)') // this will not work

// querySelector use css rules and return-like list (we can use .length() and the index[i])
document.querySelector('#contact') // only return the first element  match the string, that means fist ele of class
let menuBTN = document.querySelectorAll('.menuBtn') // span or className
document.querySelectorAll('span')

console.log(menuBTN);
menuBTN.forEach(el=>{
    el.style='background-color: yellow';
    // el.innerText = 'something'
});

//============

let contact = document.querySelector('#contact')
// contact.textContent='hell from JS' // will repalce all

//============ creat and add new p tag als a child of contact

let pTag = document.createElement('p');
// pTag.textContent='Hello from JS'; //pTag.innerText='...'  is the same
pTag.innerHTML='<div> Hello from JS </div>'; // innerHTML can add some code but not only string if we use textContent
contact.appendChild(pTag)

//============ add class Name to contact
// contact.classList.add('contactBox')

//============= replace the class name
contact.classList.replace('light','dark')



