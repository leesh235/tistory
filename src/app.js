import "./env";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
// import logger from "morgan"; //접속 정보?를 알수있음
import "./passport";
import { authenticateJwt } from "./passport";

const PORT = 4000;

const server = new GraphQLServer({
  schema,
  context: ({request}) => {
    //return 안하면 user를 못받아옴
    return {request}
  }
});

//express server에 접근, authenticateJwt사용
//요청이 들어올때마다 실행?
// server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({
  port:PORT
},() => console.log("Graphql Server Running"));