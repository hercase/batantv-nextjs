import Header from '../components/Header';
import Footer from '../components/Footer';
import ChannelGrid from '../components/ChannelsGrid';
import Hero from '../components/Hero';
import Recommended from '../components/Recommended';

const HomePage: React.FC = () => {
  return (
    <>
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
