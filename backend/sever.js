import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
    },
};

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app: app
    });

    app.use((req, res) => {
        res.send("Hello from express");
    })

    app.listen(4000, () => console.log("Server is running on port 4000"));
}
startServer();