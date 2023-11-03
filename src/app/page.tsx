import Products from './components/Products';
import Features from './components/features/Features';
import Landing from './pages/landing/page';
import LoginForm from './pages/login/page';
import GraphQlProvider from './GraphQLProvider';
import { products } from '../../utils/products';
import Container from './components/Container';
import ProductCard from './components/products/ProductCard';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


const Home: React.FC = () => {
  return (
      <GraphQlProvider children={undefined} >
        <Landing /> 
      </GraphQlProvider>
  );
};

export default Home;