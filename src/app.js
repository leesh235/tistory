import {GraphQLServer} from "graphql-yoga";
import schema from "./schema";
import "./env"

const server = new GraphQLServer({
    schema
})

server.start(() => console.log("Graphql Server Running"));