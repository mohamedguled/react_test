import type { NextPage } from 'next';
import Head from 'next/head';

import Header from './components/Header';
import Social from './components/Social';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className='hero flex w-full justify-between pt-12'>
        <div className='w-full lg:w-1/2 flex flex-col flex-wrap items-center px-8'>
          <Header />
          <div className='flex w-full mt-8'>
            <Social />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
