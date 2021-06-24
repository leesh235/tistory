import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "apollo-link-context";
import fetch from "fetch";

const makeClient = (token) => {

    const cache = new InMemoryCache();
    const httpLink = new createHttpLink({
        uri: "http://localhost:4000/",
        fetch
    });

    const authLink = setContext((_, {headers}) => {
        return{
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: cache
    });
    return client;
}

export default makeClient();