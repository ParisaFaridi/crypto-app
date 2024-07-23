import styles from "./Chart.module.css"
function Chart({chart,setChart}) {
    const closeHandler=()=>{
        setChart(null);
    }
  return (
    <div className={styles.container}>
        
       <span className={styles.cross} onClick={closeHandler}>X</span>
    
    <div className={styles.chart}></div>
    </div>
  )
}

export default Chart