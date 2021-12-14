
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

// called everytime in dev mode
// preview mode is like devmode on production => getStaticProps will be called everytime as log as preview mode is enable
export async function getStaticProps(context) {
  
  const { params } = context;

  return {
    props: {
      number: Math.random()
    },
    revalidate: 10
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Home(props) {

  return (
    <div className={styles.container}>
      {props.number}
    </div>
  )
}
