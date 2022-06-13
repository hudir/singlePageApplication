import React, { useEffect, useState } from "react";
import list from "../json/list.json";
import { toast } from "react-toastify";

export const Context = React.createContext()

export function ContextProvider({children}){

    const [prodList, setProdList] = useState(null);
    const [cartList, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0)
    // , [fakeStore, setFakeStore]  = useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{          
                const jsonData = (json.map(x=>({...x,inventory:19})))
                // setProdList(prev=> [...prev,...jsonData] )
                // console.log(prodList);  
                setProdList([...jsonData,...list])            
            })
    },[])

    useEffect(()=>{
        // console.log(typeof list)
        // console.log(Boolean(null))
        // const newList=JSON.parse(list)
        // if(!prodList) setProdList(list)
        //  setProdList(prodList.sort((a,b)=>a.id-b.id));
        prodList && setProdList(prodList.sort((a,b)=>a.id-b.id));

        if(cartList) setTotalCost(cartList.sort((a,b)=>a.id-b.id))
       
        if(cartList.length>0) 
        setTotalCost(cartList.reduce((acc,x)=>acc+x.inventory*x.price,0))
        else setTotalCost(0)
        // console.log(cartList.reduce((acc,x)=>acc+x.inventory*x.price,0));
    },[cartList,prodList])

   
    const addToCart = (obj , e) =>{
        // first check is cartList already have the item
        if(cartList.some(x=>x.id===obj.id)){ //if s cartList already have the item
            if (e.target.name==="addOne") {
                // add one item to cartList
                const NewCartList = cartList.map(x=>x.id===obj.id ? {...x,inventory: x.inventory+1} :x)
                setCartList(NewCartList)
        
                // update prodList
                const newProdList = prodList.map((x,i)=> x.id === obj.id ? {...x, inventory: x.inventory-1} : x);
                
                setProdList(newProdList.filter(x=>x.inventory!==0))
                toast(obj.title+' has added to cart')
               
           } else if (e.target.name === "addAll") {
                // add all item to cartList
                const NewCartList = cartList.map(x=>x.id===obj.id ? {...x,inventory: x.inventory+obj.inventory} :x)
                setCartList(NewCartList)
        
                // update prodList
                const newProdList = prodList.filter((x,i)=> x.id !== obj.id)
                setProdList(newProdList)
                toast(obj.inventory+ " "+obj.title+' has added to cart')
           }  
          //  cartList do not have the item
        } else {
            if (e.target.name==="addOne") {
                // add one item to cartList
               
                const NewObj = {...obj};
                NewObj.inventory = 1
                setCartList([...cartList,NewObj])
        
                // update prodList
                const newProdList = prodList.map((x,i)=> x.id === obj.id ? {...x, inventory: x.inventory-1} : x);
                
                setProdList(newProdList.filter(x=>x.inventory!==0))
                toast(obj.title+' has added to cart')
               
           } else if (e.target.name === "addAll") {
                // add all item to cartList
                setCartList([...cartList,obj])
        
                // update prodList
                const newProdList = prodList.filter((x,i)=> x.id !== obj.id)
                setProdList(newProdList)
                toast(obj.inventory+ " "+obj.title+' has added to cart')
           }  
        }      
    }


    const removeItem=(obj,e)=>{
          // first check is prodList already have the item
          if(prodList.some(x=>x.id===obj.id)){ //if  prodList already have the item
            if (e.target.name==="removeOne") {
                // add one item to prodList
                const NewProdList = prodList.map(x=>x.id===obj.id ? {...x,inventory: x.inventory+1} :x)
                setProdList(NewProdList)
        
                // update cartList
                const newCartList = cartList.map((x,i)=> x.id === obj.id ? {...x, inventory: x.inventory-1} : x);
                
                setCartList(newCartList.filter(x=>x.inventory!==0));
                toast.warn(obj.title+'has been removed', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
               
           } else if (e.target.name === "removeAll") {
                // add all item to prodList
                const  newProdList = prodList.map(x=>x.id===obj.id ? {...x,inventory: x.inventory+obj.inventory} :x)
                setProdList(newProdList)
                
                // update cartList
                const NewCartList = cartList.filter((x,i)=> x.id !== obj.id)
                setCartList(NewCartList);
                toast.warn(obj.inventory+ " " +obj.title+'has been removed', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });      
           }  
          //  ProdLst do not have the item
        } else {
            if (e.target.name==="removeOne") {
                // add one item to prodList
                const NewObj = {...obj};
                NewObj.inventory = 1
                setProdList([...prodList,NewObj])
                // setCartList([...cartList,NewObj])
        
                // update cartList
                const newCartList = cartList.map((x,i)=> x.id === obj.id ? {...x, inventory: x.inventory-1} : x);
                
                setCartList(newCartList.filter(x=>x.inventory!==0))
                toast.warn(obj.title+'has been removed', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
               
           } else if (e.target.name === "removeAll") {
                // add all item to prodList
                setProdList([...prodList,obj])
        
                // update cartList
                const newCartList = cartList.filter((x,i)=> x.id !== obj.id)
                setCartList(newCartList)
                toast.warn(obj.inventory+ " " +obj.title+'has been removed', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });  
           }  
        }          
    }
    

    return (
        <Context.Provider value={{
            prodList,
            addToCart,
            cartList,
            totalCost,
            removeItem,
            setCartList
        }}>{children}</Context.Provider>
    )
}