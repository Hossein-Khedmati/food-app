import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/">FoodBaz</Link>
            </div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories">Categories</Link>
            </div>
        </header>
        <div className={styles.container}>
            {children}
        </div>
        <footer className={styles.footer}>
            <a href="https://github.com/Hossein-Khedmati" target="_blank" rel="noreferre">Developed by Hossein Khedmati</a>
            Next.js Project | Special thanks to Milad Azami &copy;
        </footer>
    </>
  )
}

export default Layout