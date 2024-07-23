import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoin.module.css"
import { getChart } from "../../services/API";

function TableCoin({coins,isLoading,setChart}) {
    console.log(isLoading)
  return (
    <div className={styles.container}>
      {isLoading?
      <RotatingLines
        strokeColor="#3874ff"
        strokeWidth="2"/>:
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>coin</th>
                    <th>name</th>
                    <th>price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                coins.map( coin => 
                  
                    <TableRow key={CountQueuingStrategy.id} coin={coin} setChart={setChart}/>
                )}
            </tbody>
        </table>}
    </div>
  )
}

export default TableCoin


const TableRow = ({coin,setChart}) => {
  
    const showHandler= async()=>{
      try{
        const res = await fetch(getChart(coin.id))
        const json = await res.json();
        setChart(json);
        console.log(json);
      }catch{
          
      }
      setChart(true)
    }
    return (
      <tr>
        <td>
          <div className={styles.symbol} onClick={showHandler}>
            <img src={coin.image || 'default-image-url'} />
            <span>{(coin.symbol).toUpperCase()}</span>
          </div>
        </td>
        <td>{coin.name}</td>
        <td>{Number(coin.current_price).toLocaleString()}</td>
        <td className={(coin.price_change_percentage_24h) > 0? styles.success:styles.error}>{Number(coin.price_change_percentage_24h).toFixed(2)}</td>
        <td>{Number(coin.total_volume).toLocaleString()}</td>
        <td>
          {(coin.price_change_percentage_24h > 0)
            ? <img src={chartUp} alt={name} />
            : <img src={chartDown} alt={name} />}
        </td>
      </tr>
    );
  };