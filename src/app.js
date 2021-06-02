import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import "./env";
import "./passport";
import {authenticateJwt} from "./passport";
import {isAuthenticated} from "./utile";

const PORT = 4000;

const server = new GraphQLServer({
  schema,
  context: ({request}) => {{ request, isAuthenticated }}
});

//express server에 접근, authenticateJwt사용
server.express.use(authenticateJwt);

server.start({
  port:PORT
},() => console.log("Graphql Server Running"));