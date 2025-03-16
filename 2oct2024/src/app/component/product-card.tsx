import { client } from '@/sanity/lib/client'
import React from 'react'
import { Image } from 'sanity'
interface Iproduct{
    productName:string,
    price:number,
    image:Image
}
const ProductCard = async () => {
const pData:Iproduct[] = await client.fetch(`*[_type=="product"]{
  productName,
  price,
    image
}`)
  return (
    <div>
        {
        pData.map((productt)=>{
            <div>
                {productt.price}
            </div>
        })}
      
    </div>
  )
}

export default PRODUCTCard