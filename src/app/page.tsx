"use client"
import Products from './components/Products';
import Features from './components/Features';
import Landing from './pages/landing/page';
import LoginForm from './pages/login/page';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo";



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