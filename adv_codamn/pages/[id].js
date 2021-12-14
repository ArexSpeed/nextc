
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

// shop/[id] -> params in getStaticProps
// Next.js like to run getStaticProps on build time.

export async function getStaticProps(context) {
  
  const { params } = context;

  return {
    props: {
      userCount
    },
    revalidate: 10 // I will at most generate only 1 page in 10 seconds
  }
}

//getStaticPath allow to provide information to next js
//on build time next getStaticPahts({ params: { id: 'product-1'} }}) -> HTML + JSON
// store all on disk/CDN

// /shop/product-4 -> with fallback: false -> 404 (we dont want any not included sites)
// /shop/product-4 -> with fallback: true -> load page and check StaticProps
// /shop/product-4 -> with fallback: 'blocking -> load page only for first user, rest will have it quickly

export function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: [
      { params: { id: 'product-1'} },
      { params: { id: 'product-3' }}
    ] //you would want to be build at Build Time (ahead of time)
  }
}

export default function Home(props) {
  const {rows} = props;
  const router = useRouter();

  // if fallback: 'blocking'
  // Pros:
  // 1. No flashed of loading/loader or missing content
  // cons:
  // 1. The first visitor will have a little delay
  if(router.isFallback) {
    // right now, next.js getStaticProps is executing
    <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      Loaded
    </div>
  )
}
