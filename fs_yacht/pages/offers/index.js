import BaseLayout from 'components/BaseLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import paginateOffers from 'services/offers/paginate';
import { jsonFetcher } from 'utils';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const offers = await paginateOffers();
  console.log(offers, 'offers index');
  return {
    props: {
      offset: offers.offset ?? null, // if bo przy mniejszej ilosci wyskakiwal blad SerializableError .offset null
      offers: offers.records.map((offer) => offer.fields)
    }
  };
};

export default function Home({ offers, offset }) {
  const { query } = useRouter();
  //query do przekazywania cat np ?category=sale
  const [currentOffers, setOffers] = useState(offers);
  const [currentOffset, setOffset] = useState(offset);

  //loadMore odpyta zew endpoint i przekaze offset
  const loadMore = async () => {
    const response = await jsonFetcher(`/api/offers/paginate?offset=${currentOffset}`);
    setOffset(response.offset);
    setOffers([...currentOffers, ...response.offers]);
  };

  //dodaje obsluge filtrowania category
  const handleFilters = async () => {
    let filters = '';
    if (query.category) {
      filters += `?category=${query.category}`;
    }
    const response = await jsonFetcher(`/api/offers/paginate${filters}`);
    setOffset(response.offset);
    //nadpisujemy tylko filtrowane
    setOffers([...response.offers]);
  };

  useEffect(() => {
    handleFilters();
  }, [query]);

  return (
    <BaseLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-around w-full mb-4">
            <Link href="/offers">
              <button className={query.category ? 'btn-secondary' : 'btn-primary'}>All</button>
            </Link>
            <Link href="?category=sale">
              <button className={query.category === 'sale' ? 'btn-primary' : 'btn-secondary'}>
                For sale
              </button>
            </Link>
            <Link href="?category=rent">
              <button className={query.category === 'rent' ? 'btn-primary' : 'btn-secondary'}>
                For rent
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Listowac zawsze aktualne oferty z currentOffers */}
            {currentOffers.map((offer) => (
              <div key={offer.id} className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                <Link href={`/offers/${offer.id}`}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="/boat.jpg"
                      width={720}
                      height={400}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {offer.category}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {offer.title} - {offer.status}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {offer.description.length > 100
                        ? offer.description.substring(0, 100) + '...'
                        : offer.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            {currentOffset && (
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={loadMore}>
                Load more
              </button>
            )}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
