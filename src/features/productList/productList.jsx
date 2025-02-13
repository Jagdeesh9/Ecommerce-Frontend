import { Heading1 } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from '@/custom_components/ProductCard';
import { ToastContainer } from 'react-toastify';

function ProductList() {
  const productList = useSelector((state)=>state.products.products)
  return (
    <div className=' flex flex-wrap p-10 bg-yellow-100 items-center justify-center gap-5'>
      {
        // console.log(productList)
        productList.map(
          (product)=>
             
           <ProductCard 
           key={product.id}
            id={product.id} 
            title={product.title} 
            image={product.image} 
            price="49.99" 
            rating={4}
            product={product}
          />
        )
      }
      <ToastContainer />
    </div>
  )
}

export default ProductList
