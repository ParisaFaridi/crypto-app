import { Children } from "react"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
            <a href="https://github/ParisaFaridi/crypto-app">Github</a>
        </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Parisa with ❤</p>
    </footer>
    </>
    
  )
}

export default Layout