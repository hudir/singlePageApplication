import React,{useEffect, useState} from 'react'
import {useParams, Link , useNavigate} from 'react-router-dom'
import blogsApi from '../api/blogs'


export default function Blog() {
    let {id} = useParams()
    const navigate = useNavigate()
    const [arr, setArr]=useState([])
    useEffect(()=>{
        // setArr(blogsApi.filter(el=>el.id===id))
        const post = blogsApi.filter(el=>el.id===id)[0]
        if(!post) navigate('/blogs')
        else setArr([post])
    },[id])
    
  return (
    <div>
   { arr.length>0 && arr.map((el,i)=>( 
   <div className='container' key={i}>
       <h1>{el.title}</h1>
       <img src={el.image} alt="" />
       <p>{el.description}</p>

       <Link className='btn btn-primary text-light mx-3 px-4'  to="/blogs">Back to Blogs</Link>
       <Link  className='btn btn-primary text-light mx-3 px-4' to="/">Home</Link>

   </div>  ))}
    </div>
  )
}
