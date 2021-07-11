import Head from 'next/head';

import { fromImageToUrl, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';
import BuyButton from '../../components/BuyButton';

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0] //cause the API response for filrer is an array
    }
  }
}

export async function getStaticPaths() {
  // Retrive all the possible paths
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();
  //Return them to NextJS content
  return {
    paths: products.map(product => ({
      params: { slug: String(product.slug) }
    })),
    fallback: false //Tells nextjs to show 404 if teh param is not match
  }
}

const Product = ({ product }) => {
  return (
    <div>
      <Head>
        {
          product.meta_title && 
          <title>{product.meta_title}</title>
        }
        {
          product.meta_description && 
          <meta name="description" content={product.meta_description} />
        }
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>${twoDecimals(product.price)} <BuyButton product={product} /> </p>
      <p>
        {product.content}
      </p>
    </div>
  )
}

export default Product;