import Head from 'next/head'
import styles from '../styles/Home.module.css'

// A. You trying to build pages on build time
// 20 static routes, 35 dynamic routes (eCommerce store -> 35 products)

// B. Incrementally/Lazily build website

// 35M dynamic routes (/store/[id]) -> ahead of time = 0 pages
// /store/1 -> getStaticProps (like getServerSideProps)
// /store/999 -> getStaticProps -> saved for other people, served immediately as static page

export function getStaticProps() {

}

export default function Home(props) {
  const {rows} = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Dynamic Site {props.data}
      </main>
    </div>
  )
}
