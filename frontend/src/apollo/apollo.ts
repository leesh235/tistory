import { ApolloClient, InMemoryCache, createHttpLink, makeVar }from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { resolvers } from "./LocalState";

export const currentRole = makeVar<string>("");
/*
  값 불러오기 = currentRole()
  새로운 값 저장 = currentRole(props)
*/

//초기 cache값 지정, isLoggedIn은 localStorage의 영향을 받아 값이 유지 되지만 role은 새로고침 시 계속 초기화
const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        //Reactive Variables 지정
        isLoggedIn: {
          read() {
            return Boolean(localStorage.getItem("token")) || false;
          },
        },
        role: {
          read() {
            return localStorage.getItem("role") || "";
          }
        }
      },
    },
  },
})

//위와 같은 방법
// const cache: InMemoryCache = new InMemoryCache()
// cache.writeQuery({
//   query: TOKENINFO,
//   data: {
//       isLoggedIn: Boolean(localStorage.getItem("token")) || false,
//       role: currentRole()
//   }
// })

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
    // link: authLink.concat(httpLink),
    uri,
    credentials: "same-origin",
    cache,
    resolvers: resolvers,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default client;