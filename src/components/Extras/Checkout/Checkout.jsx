import React from 'react'
import { useState, useEffect } from "react"


function Checkout() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      items()
    }, [])
  
    // Fetched items
    const items = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/7`)
      const data = await res.json()
  
      setProducts(data)
    } 
  return (
    <div className="boxes" key={products.id} >
        <div className='box'>
        <img src={`${products.image}`} className='img' />
        <button className='btn'>Checkout</button>
        </div>
  </div>
  )
}

export default Checkout