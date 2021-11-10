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

const link = createHttpLink({
  uri: "http://localhost:4000"
})

const client =  new ApolloClient({
  credentials: "same-origin",
  link: link,
  cache,
  resolvers: resolvers,
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  
});

export default client;