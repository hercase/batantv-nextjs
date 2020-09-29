import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ChannelGrid from '../components/ChannelsGrid';
import Hero from '../components/Hero';
import Recommended from '../components/Recommended';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>BatanTV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="container mx-auto">
        <ChannelGrid />
        <Hero />
        <Recommended />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
