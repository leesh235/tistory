// import ApolloClient from "apollo-boost";
import { ApolloClient, InMemoryCache }from '@apollo/client';
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

const client =  new ApolloClient({
  uri: "http://localhost:4000",
  credentials: "same-origin",
  cache,
  resolvers: resolvers,
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  
});

export default client;