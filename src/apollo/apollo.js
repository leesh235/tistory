import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { defaults, resolvers } from "./LocalState";

const cache = new InMemoryCache();
const link = new createHttpLink({
    uri: "http://localhost:4000/",
});

const client = new ApolloClient({
    cache: cache,
    link: link,
    defaults,
    resolvers
})

export default client;