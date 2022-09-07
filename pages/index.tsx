import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DesignedFor from '../components/sections/DesignedFor';
import Features from '../components/sections/Features';
import Testimonial from '../components/sections/Testimonial';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destiny</title>
        <meta name="description" content="Destiny landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Features />
        <DesignedFor />
        <Testimonial />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
