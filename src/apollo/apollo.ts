// import ApolloClient from "apollo-boost";
import { ApolloClient, InMemoryCache, createHttpLink }from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { resolvers } from "./LocalState";

//LocalState.ts의 11번줄, defaults와 비슷
const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return Boolean(localStorage.getItem("token")) || false;
          },
        },
      },
    },
  },
})

const uri = process.env.REACT_APP_SERVER;

const httpLink = createHttpLink({
  uri,
  credentials: "same-origin",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client =  new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: resolvers,
});

export default client;