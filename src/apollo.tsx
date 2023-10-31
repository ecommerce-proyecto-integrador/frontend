// apollo.ts

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createContext } from 'react';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.82:4000/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  
  
    const token = localStorage.getItem('usertoken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const initializeApollo = () => {
  return client;
};

export const useApollo = () => {
  return client;
};
