import Products from './components/Products';
import Features from './components/features/Features';
import Landing from './pages/landing/page';
import LoginForm from './pages/login/page';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo";
import { products } from '../../utils/products';
import Container from './components/Container';
import ProductCard from './components/products/ProductCard';




const Home: React.FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>
            <Landing />
              <LoginForm/>
           
           
          </ApolloProvider>
        
    </div>
  );
};

export default Home;