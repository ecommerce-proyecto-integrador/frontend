import Products from './components/products/page';
import Features from './components/features/page';
import Landing from './components/landing/page';
import Footer from './components/footer/page';
import Navbar from './components/navbar/page';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Products />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;