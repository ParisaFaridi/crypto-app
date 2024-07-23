import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <div>
        <header>CryptoApp</header>
        {children}
        <footer>Developed by Parisa</footer>
    </div>
  )
}

export default Layout