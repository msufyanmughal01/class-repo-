import React from 'react'
import Image from "next/image"
import { Search, ShoppingBag, User } from 'lucide-react'
import Link from "next/link"
export const Links =[
    { name: "Jewelry & Accessories",
        link:"/jewelry"
    },
    { name: "Clothing & Shoes",
        link:"/clothing"
    },
    { name: "Home & Living",
        link:"/"
    },
    { name: "Wedding & Party",
        link:"/weding"
    },
    { name: "Toys & Entertainment",
        link:"/toy"
    },
    { name: "Art & Collectibles",
        link:"/art"
    },
    { name: "Craft Supplies & Tools",
        link:"/craft"
    },
]


const Header = () => {
  return (
    <div>
        {/* Top header */}
    <div className='flex justify-between'>
      <Search/>
      <Image src ="/logo.png" alt='logo' width={100} height={100}/>
      <div className='flex'>
        <User/>
        <h3>Account</h3>
      </div>
      <div className='flex'>
        <ShoppingBag/>
        <h3>Shopping</h3>
      </div>
      </div>
      {/* Nav Header */}
      <div>
        <ul>
            {
                Links.map(item)=>{
                    return{
                        <li>
                        key={item.name}
                        <Link href ={item.link}>{item.name}</Link> 
                        </li>
                    }}}
        </ul>
      </div>
      </div>
    
  )
}

export default Header
