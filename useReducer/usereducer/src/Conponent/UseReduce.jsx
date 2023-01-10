import React from "react"
import { useState } from "react"

export default function UseReduce(){
let [count,setCount]=useState(0)

    return (
        <div>
            <h1>Data testing....</h1>

            <h1>{count}</h1>
            <button  onClick={()=>setCount(preCount=>preCount+1)}>add</button>
            <button disabled={count==0} onClick={()=>setCount(preCount=>preCount-1)}>reduce</button>
        </div>
    )
}