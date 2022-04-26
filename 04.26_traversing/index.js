// Traversing (Selecting HTML(s) by its parent, children or siblings elements)

let nav = document.querySelector('nav')

// a) selecting the parent element

let parenOfNav = nav.parentElement;
    parenOfNav.style.backgroundColor='#000';

// b) selecting the children element

let childenOfNav = nav.children;  // HTMLCollection (array-like list only accepts .length and the index)
   childenOfNav[0].style.backgroundColor='#fff'

// c) selecting the previous sibling (siblings are on the same level)

let imgContainer=nav.previousElementSibling;
    imgContainer.style.backgroundColor='#fff'

// d) selecting the next sibling

let about = document.querySelector('#about');
    about.style.backgroundColor='yellow'
let contact = about.nextElementSibling;
    contact.style.backgroundColor='blue'

// side note: to get the element's name (tag) you can use .nodeName method as follows
console.log(about.nodeName);

let html = document.querySelector('html')
    html.style.backgroundColor='red'