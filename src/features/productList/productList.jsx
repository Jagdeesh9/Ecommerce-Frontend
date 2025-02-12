import { Heading1 } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

function ProductList() {
    const productList = useSelector((state)=>state.products.products)
  return (
    <div>
      {
        // console.log(productList)
        productList.map((product)=> <h1 key={product.id}>{product.id}</h1>)
      }
    </div>
  )
}

export default ProductList
