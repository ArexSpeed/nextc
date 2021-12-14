# Env convention
* .env.local - database, passwords, stripe secret key, do not add to version control
These files as a template
* .env.development - Stripe client key
* .env.production

# get ServerSideProps
website.com/dynamic -> getServerSideProps
 website.com/static -> no getServerSideProps

* build:
* Mark as SSR -> /dynamic
* Mark as static -> /static

# getStaticProps
 A. You trying to build pages on build time
 20 static routes, 35 dynamic routes (eCommerce store -> 35 products)

 B. Incrementally/Lazily build website

 35M dynamic routes (/store/[id]) -> ahead of time = 0 pages
 /store/1 -> getStaticProps (like getServerSideProps)
 /store/999 -> getStaticProps -> saved for other people, served immediately as static page

 revalidate -> time to create peage again or in version (little confused, more complicated than i though)
 What could be in live for understand
 // live: 100K/second -> getServerSide -> 100K request/database [BAD]

  // live: 100K/second -> getStaticProps (with 1 second revalidate) -> 1 request/second on the DB [AWESOME]

# getStaticPaths
 - getStaticPath allow to provide information to next js
 - on build time next getStaticPahts({ params: { id: 'product-1'} }}) -> HTML + JSON
 - store all on disk/CDN

 Fallback option on return
  /shop/product-4 -> with fallback: false -> 404 (we dont want any not included sites)
  /shop/product-4 -> with fallback: true -> load page and check StaticProps
  /shop/product-4 -> with fallback: 'blocking -> load page only for first user, rest will have it quickly

  Pros: 'blocking'
  1. No flashed of loading/loader or missing content
  Cons:
  1. The first visitor will have a little delay

# Preview mode
Use for development mode in production
preview set data in api/enable-preview, then in staticProps
// called everytime in dev mode
// preview mode is like devmode on production => getStaticProps will be called everytime as log as preview mode is enable