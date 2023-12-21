"use client";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getCookie } from "cookies-next";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: "http://192.168.208.1:4000/graphql", // <-- Add the URL of the GraphQL server here 192.168.1.82:4000
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  //Here logic to get token from local storage
  const token = getCookie("token"); //change this

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
  
});

export default client;
