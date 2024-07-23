import { useEffect, useState } from "react"


function Search({currency,setCurrency}) {

    const [query,setQuery]=useState("");

    useEffect(()=>{
        console.log(query)
    },[query])

  return (
    <div>
        <input placeholder="search..." type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        <select onChange={(e)=>{setCurrency(e.target.value)}} value={currency}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
    </div>
  )
}

export default Search