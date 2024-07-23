import { useEffect, useState } from "react"
import { searchCoin } from "../../services/API";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Search.module.css"


function Search({currency,setCurrency}) {

    const [query,setQuery]=useState("");
    const [results,setResults] = useState([])
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();
        setResults([]);
        if(!query) {
            setIsLoading(false);
            return;
        }
        
       const search = async () => {
        try {
            const res = await fetch(searchCoin(query),{signal: controller.signal})
            const json = await res.json();
            
            if(json.coins){
                setIsLoading(false);
                setResults(json.coins);
            }else{
                alert(json.status.error_message)
            }
        } catch (error) {
            if(error.name !== "AbortError" ){
                alert(error.message)
            }
        }
        
       }
       setIsLoading(true);
       search();
       return ()=>{
        controller.abort();
       }
    },[query])

  return (
    <div className={styles.searchBox}>
        <input placeholder="search..." type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        <select onChange={(e)=>{setCurrency(e.target.value)}} value={currency}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        {(!!results.length ||isLoading) &&
        <div className={styles.searchResult}>
        {isLoading && <RotatingLines
         height="50px"
         width="50px"
        strokeColor="#3874ff"
        strokeWidth="2"/>} 
        <ul>
        {results.map((coin)=> {
                return <li key={coin.id}>
                    <img src={coin.thumb} alt={coin.name} />
                    <p>{coin.name}</p>
                    </li>
            })}
        </ul>
        </div>}
    </div>
  )
}

export default Search