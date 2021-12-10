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