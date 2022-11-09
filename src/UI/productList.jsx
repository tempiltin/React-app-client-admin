import React from 'react'
import Cart from './Cart'

const productList = ({ data }) => {
    return (
        <div className="row">

            {
              data ?  data.map((item, index) => (
                    <Cart data={item} key={index} />
                )) : ""
            }
        </div>

    )
}

export default productList