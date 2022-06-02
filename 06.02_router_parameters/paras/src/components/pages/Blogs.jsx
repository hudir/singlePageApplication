import React from 'react'
import blogsApi from '../api/blogs'
import { Link } from 'react-router-dom';



const Card = ({ id, title, image }) => {
    return (
      <div className="card">
        <img height={200} src={image} className="card-img-top" alt="..." />
        <div className="card-body border-top">
          <h5 className="card-title ">{title}</h5>
  
          <Link to={`/blog/${id}`} className="btn btn-primary">
            READ MORE
          </Link>
        </div>
      </div>
    );
  };
  
  export default function Blogs() {
     
    return (
      <div className="container mt-4">
        <div className="row">
          {blogsApi.map((el) => (
            <div className="col" key={el.id}>
              <Card {...el} />
            </div>
          ))}
        </div>
      </div>
    );
  }