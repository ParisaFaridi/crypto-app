import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/API";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";


function HomePage() {

    const [coins,setCoins] = useState([]);
    const [currency,setCurrency]=useState("usd");
    const [isLoading,setIsLoading]=useState(true);
    const [chart,setChart]= useState(null);
    const [page,setPage]=useState(1);

    useEffect(()=>{
      setIsLoading(true);
        const getData = async()=>{
          try {
            const res = await fetch(getCoinList(page,currency))
            const json = await res.json()
            setCoins(json)
            setIsLoading(false)
          } catch (error) {
            console.log(error.message)
          }
            
        } 
        getData();
    },[page,currency])

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
      <Pagination page={page} setPage={setPage}/>
      { !!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  )
}

export default HomePage