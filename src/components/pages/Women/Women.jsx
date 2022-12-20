import './Women.css'
import { useState, useEffect } from "react";

function Women() {
  
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      items()
    }, [])
  
    // Fetched items
    const items = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/17`)
      const data = await res.json()
  
      setProducts(data)
    } 
  

  const Display = () => {
    return (   
        <div key={products.id} className="box">
        <img src={`${products.image }`} alt="" className="img" />
        <p>{products.title}</p>
        <p>${products.price}</p>
        </div>
    )
  }
  
  return (
      <div>
        <h1>Category</h1>
        <div className="boxes"> 
          <Display />
          <Display />
          <Display />
          <Display />
          <Display />
          <Display />
          <Display />
          <Display />   
        </div>
      </div>
    )
  }

export default Women