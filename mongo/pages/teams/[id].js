import { ObjectId } from 'mongodb';
import Head from 'next/head'
import { connectToDatabase } from '../../util/mongodb'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  console.log(params, 'params')
  const id = new ObjectId(params.id) //database in MongoDB is stored as an ObjectID, so you'll have to convert the string to an ObjectID. 
  // for all data
  // const data = await db.collection('teams')
  //   .findOne({
  //     _id: id
  //   })
  //for specific data
  const data = await db.collection('teams')
    .findOne({
      _id: id
    },
    {
      projection: {
        name: 1,
        site: 1
      }
    })
    console.log(data, 'data in id')
  return {
    props: {
      team: JSON.parse(JSON.stringify(data))
    },
    revalidate: 1
  }
}

export default function TeamSite({ team }) {
  console.log(team, 'props')
  return (
    <div>
      <p>{team.name}</p>
      <p>{team.site}</p>
    </div>
  )
}