import {GraphQLServer} from "graphql-yoga"
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs:`type User{
        id: Int!
        title: String
    }
    
    type Query{
        users(limit: Int): [User]!
        user(id: Int!): User
    }
    `,
    resolvers
})

server.start(() => console.log("Graphql Server Running"));