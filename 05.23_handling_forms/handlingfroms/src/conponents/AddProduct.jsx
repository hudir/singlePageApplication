import React from 'react'

import RenderProductList from './RenderProductList';

export default function AddProduct() {

    const [isSold, setIsSold] = React.useState(false)
    const [products, setProducts] = React.useState({'isSold':isSold});
    const [productList, setProductList] = React.useState([]);

      // for sold button on Product Card
    const handleIsSold = index =>{
        const newList = (productList.map((el,i)=>{
            if(index===i){
                 el.isSold=!el.isSold
                // return {...el, isSold: !el.isSold}
                return el
            } else return el
        }))
        setProductList(newList)
    }

    // for delete button on Product Card
    const handleDelete = index =>{
        const newList = productList.filter((el,i)=>i!==index)
        setProductList(newList)
    }

    // to store input value in products Object
    const handleChange=e=>{
        // everything in [ ] will be string ?
        // setUserInput({...userInput ,[e.target.name]: e.target.value}); 
        setProducts(prev=> ({...prev, [e.target.name]: e.target.value}))
        }

    // for add button
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(products)

        // check if there is already the product in productList
        if(!productList.some(el=>el.name===products.name)) {
            setProductList(prev=> [...prev, products])
            setProducts({'isSold':isSold})
        
            document.querySelectorAll('.fInput').forEach(el=>el.value='')
        } else {
            alert("there is already this product: "+products.name)
        }
        
        // console.log(productList)
    }

    const [localProducts, setLocalProducts] = React.useState(localStorage.getItem(productList)||null)
    if (!localProducts) {
        localStorage.setItem('productList',productList)
    }

    // const handleChange=e=>{
    //     let beThere =false;
    //     products.forEach((el,i)=>{
    //         if(el.productName === e.target.name) {
    //             setProducts([...products, products[i]={[e.target.name]: e.target.value}]);
    //             beThere = true;
    //         }
    //     })
    //     if(!beThere && e.target.name === 'productName'){
    //         setProducts([...products, {[e.target.name]: e.target.value}]])
    //     }
    

    // };

    
  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div>productName</div>
            <input className='fInput' type={"text"} name='name' onChange={handleChange} />

            <div>imgUrl</div>
            <input className='fInput' type={"text"} name='photo' onChange={handleChange} />

            <div>price</div>
            <input className='fInput' type={"text"} name='price' onChange={handleChange} />

            <br></br>
            <button>Add</button>
        </form>

        <RenderProductList productList={productList} handleIsSold={handleIsSold} handleDelete={handleDelete}/>
       
    </div>
  )
}
