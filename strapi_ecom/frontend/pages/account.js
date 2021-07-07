import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Account = () => {

  const { user, logoutUser } = useContext(AuthContext);

  if(!user) {
    return (
      <div>
        <p>Please login or register</p>
        <Link href="/"><a>Go back</a></Link>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Account page</title>
        <meta name="description" content="The account page" />
      </Head>
      <h2>Account page</h2>
      <a href="#" onClick={logoutUser}>Logout</a>
    </div>
  )
}

export default Account;