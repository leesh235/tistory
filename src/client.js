import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new createHttpLink({
    uri: "http://localhost:4000/",
});

const makeClient = (token) => {

    const authLink = setContext(_, ({headers}) => {
        return{
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(link),
        cache: cache
    });
    return client;
}

export default makeClient();