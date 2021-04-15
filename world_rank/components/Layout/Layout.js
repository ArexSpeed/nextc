import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children, title = "World Ranks" }) => (
  <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        Logo
      </header>

      <main className={styles.main}>
       {children}
      </main>

      <footer className={styles.footer}>
        Footer @ world rank
      </footer>
    </div>
)

export default Layout;