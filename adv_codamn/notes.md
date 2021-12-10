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

# getStaticPropd
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