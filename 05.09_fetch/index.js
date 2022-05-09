async function myFunc(a,b){
    console.log(a+b);
}
document.querySelector('body').addEventListener("click",async()=>{
    myFunc(2,3)
})


// console.log(myFunc(1,2))


document.querySelector("button").addEventListener("click", e=>{
    const inp = document.querySelector('input');
    if(!inp.value) return

    document.querySelectorAll('img').forEach(x=>x.style.display='none')
    let xyz = fetch("https://restcountries.com/v3.1/name/" + inp.value);
    console.log(xyz);
    
    xyz
    .then(response=>response.json())
    .then(data=>{
        console.log(111, data[0]);
        let url = data[0].flags.png;
        let img = document.createElement("img")
        img.src=url;
        img.width=400;
        img.height=300;
        document.querySelector('body').appendChild(img)
        // document.querySelector('body').textContent=data[0].name
        document.querySelector('h2').textContent=data[0].name.official;
        document.querySelector('span').innerText="capital: "+data[0].capital[0];
        document.querySelector('p').innerText=' '+data[0].subregion
    })
    .catch(err=>document.querySelector('h2').textContent='no such country')

    

})


const myFunc1 = async x => {
    try{
        const response = await fetch("https://restcountries.com/v3.1/name/"+x);
        const data = await response.json();
        console.log(data[0].subregion);
    } catch(err){console.log(err);}
}

myFunc1("germany")