import React, { useEffect, useState } from 'react'
import products from '../Db/products'
import Input from '../UI/Input'
import ProductList from '../UI/productList'
const Home = () => {
  const [phoneProducts, setPhoneProducts] = useState([])
  // const [laptopProducts, setlaptopProducts] = useState([])
  const [inp, setInp] = useState([])
    
  const click = async () => {
    console.log(inp);
    try {
      setTimeout(()=>{
        setInp("")
      },400)
      const filterPhoneProducts = products.filter(item => item.category === inp)

      await setPhoneProducts(filterPhoneProducts)

 
    } catch (error) {
      console.log(error)
    }
  }

  // const getProducts = () => {


  //   const filterlaptopProducts = products.filter(item => item.category === "laptop")
  //   setlaptopProducts(filterlaptopProducts)

  // }
  // useEffect(() => {
  //   getProducts()
  // }, [])
  return <>

    <Input inp={inp} setInp={setInp} />
    <button onClick={click}>Open Data</button>
    <ProductList data={phoneProducts} />
    {/* <ProductList data={laptopProducts} /> */}

  </>
}

export default Home