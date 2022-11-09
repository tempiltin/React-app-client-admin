import React from 'react'
const Cart = ({data}) => {
  return <div className="card">
     <img src={data.image} alt="" />
     <h1>{data.name}</h1>
     <h3>{data.category}</h3>
     <h3>{data.price}</h3>
  </div>
}

export default Cart