import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  credentials: "same-origin",
  clientState: {
      defaults,
      resolvers,
  },
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
