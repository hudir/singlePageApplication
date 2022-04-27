/* Carousel 

1- Create a carousel of up to 6 images.

2- Add arrows for navigation.

3- Write a function that handles each of the navigation behaviors.

4- Optional: Style to your pleasing.
*/
const img = document.querySelectorAll('img')
     ,leftArrow = document.querySelector('.left')
     ,rightArrow = document.querySelector('.right')
    
let index=0

rightArrow.addEventListener('click', onRightArrow);

leftArrow.addEventListener('click',()=>{
    index--;
    if(index<0) index=img.length-1

    for(let i=img.length-1; i>-1; i--){
        img[i].style.transform=`translate(${index * -100}vw, 0)`
    }
})


function onRightArrow(e){
    index++;
    if(index==img.length) {
        index=0
    };

    for(let i=0 ; i<img.length;i++){
        img[i].style.transform=`translate(${index * -100}vw, 0)`
    }
}