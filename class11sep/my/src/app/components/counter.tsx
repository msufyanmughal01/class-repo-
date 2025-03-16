"use client";
import { useState } from "react"

const Counter =()=>{
    const [count, setcount] = useState(0)
    let increment=()=>{
        setcount(count+1)
    }
    return( 
        <button onClick={increment} className={`px-2 py-2 text-orange-700
            ${count > 10 ? "bg-red-500" : "bg-slate-600"}
       ` }>
            click me{count}
        </button>
    )
}
export default Counter