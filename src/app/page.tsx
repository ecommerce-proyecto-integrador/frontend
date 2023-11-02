import { products } from '../../utils/products';
import Container from './components/Container';
import ProductCard from './components/products/ProductCard';
import Landing from './pages/landing/page';

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Landing />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {products.map((product:any) =>
            {return <ProductCard data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;