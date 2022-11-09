import React from 'react'

const Input = (props) => {
  return   <input type="text" value={props.inp} onChange={(e)=> props.setInp(e.target.value)}/>
}

export default Input