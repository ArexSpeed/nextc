import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)
    .then(res => res.json());

  return {
    props: {
      results: request.results
    }
  }

} 

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}
