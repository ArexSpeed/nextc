import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { API_URL } from '../utils/urls';
import AuthContext from '../context/AuthContext';

//Custom hook
const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if(user) {
        try {
          setLoading(true);
          const token = await getToken();
          const order_res = await fetch(`${API_URL}/orders`, {
            headers: {
              'Authorizaton': `Bearer ${token}`
            }
          })
          const data = await order_res.json()
          setOrders(data);
        } catch (error) {
          setOrders([]);
        }
        setLoading(false);
      }
    }
    fetchOrders()
  }, [user])

  return orders;
}

const Account = () => {

  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);
  console.log("Account.render orders", orders)

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
      <h3>Your Orders</h3>
      {loading && <p>Loading...</p>}
      {orders.map(order => (
        <div key={order.id}>
          {new Date(order.created_at).toLocaleDateString( 'en-EN' )} {order.product.name} ${order.total} {order.status}
        </div>
      ))}
      <p>Logged in as : {user.email}</p>
      <a href="#" onClick={logoutUser}>Logout</a>
    </div>
  )
}

export default Account;