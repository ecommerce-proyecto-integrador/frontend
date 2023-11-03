'use client'; 
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const httpLink = createHttpLink({
  uri: 'http://192.168.1.82:4000/graphql', // <-- Add the URL of the GraphQL server here
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  //Here logic to get token from local storage
  const token = "sadasdasdas"; //change this
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  export default client;