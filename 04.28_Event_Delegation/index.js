const tree=document.querySelectorAll('ul');
const lis=tree[0].querySelectorAll('li');



// put the text in a span tag in lis
lis.forEach(el=>{
    let span = document.createElement('span')
    // span.innerText=el.firstChild
    span.append(el.firstChild)
    el.prepend(span)
});

// add listner to uls key= target.tagname ==span
tree.forEach(el=>el.classList.add('d-block'))

tree[0].addEventListener('click', (e)=>{
    console.log(e.target.tagName);
    // console.log(e.target.nextElementSibling.className);

    
    if(e.target.tagName == 'SPAN' && e.target.parentElement.querySelector('ul')){
        // if (!e.target.firstChild) return

        // let nestedList = e.target.parentNode.querySelector('ul')
    // if(!nestedList) return

    // nestedList.hidden = !nestedList.hidden

        // console.log(Boolean(e.target.children[0])); this dont really work

        if(e.target.nextElementSibling.nodeName=='UL' && e.target.nextElementSibling.className == 'd-none'){
            e.target.nextElementSibling.classList.replace('d-none','d-block')
        } 
        
        else if(e.target.nextElementSibling.nodeName=='UL'  && e.target.nextElementSibling.className == 'd-block'){
            e.target.nextElementSibling.classList.replace('d-block','d-none')
        }
    }
})


// ghaasan's code
// tree[0].addEventListener('click', (e)=>{
//     if(e.target.tagName=='SPAN'){

//         const hiddUl = e.target.parentElement.querySelector('ul')
//         console.log(hiddUl);

//         if(hiddUl) {
//             hiddUl.hidden=!hiddUl.hidden 
//         }
        
//     }
// })




let div = document.querySelector('div')

let newSpan = document.createElement('span')

// now take the msg away and put it in newSpan
newSpan.append(div.firstChild)

// now we put newSpan to the origin position use prepend
// newSpan.innerText='here is the message, now in span tag'

div.prepend(newSpan)

// div.append(newSpan)

console.log(newSpan);






// that's the special case xD if no parent is there u get null with parentElement 
// try document.querySelector('HTML').parentElement 
// then try document.querySelector('HTML').nodeParent 

console.log(document.querySelector('HTML').parentElement); //null
console.log(document.querySelector('HTML').nodeParent );  // undefined