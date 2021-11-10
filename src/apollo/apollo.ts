// import ApolloClient from "apollo-boost";
import { ApolloClient, InMemoryCache, createHttpLink }from '@apollo/client';
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
  uri
})

const client =  new ApolloClient({
  uri,
  credentials: "same-origin",
  // link: httpLink,
  cache,
  resolvers: resolvers,
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  
});

export default client;