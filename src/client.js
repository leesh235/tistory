// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import {ApolloClient, ApolloLink } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { onError } from 'apollo-link-error';
import fetch from "cross-fetch";

export const makeClient = (token) => {

    // const errorLink = onError(({ graphQLErrors }) => {
    //     if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
    //   })

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
        // link: ApolloLink.from([errorLink, authLink, , httpLink]),
        cache: new InMemoryCache()
    });
    return client;
}

// export let makeClient = (token) => { 
//     const httpLink = new createHttpLink({
//         uri: "http://localhost:4000/",
//         fetch
//     });
//     const client = new ApolloClient({
//         link: httpLink,
//         credentials: "same-origin",
//         headers: {
//             authorization: token ? `Bearer ${token}` : ""
//         },
//     });
//     return client;
// }
  