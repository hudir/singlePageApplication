import React from 'react'

import RenderProductList from './RenderProductList';

export default function AddProduct() {
    const [products, setProducts] = React.useState({});
    const [productList, setProductList] = React.useState([]);

    const handleChange=e=>{
        // everything in [ ] will be string ?
        // setUserInput({...userInput ,[e.target.name]: e.target.value}); 
        setProducts(prev=> ({...prev, [e.target.name]: e.target.value}))
       
        }

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(products)
        setProductList(prev=> [...prev, products])
        setProducts({})
        
        document.querySelectorAll('.fInput').forEach(el=>el.value='')
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

        <RenderProductList productList={productList}/>
       
    </div>
  )
}
