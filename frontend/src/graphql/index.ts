import { ApolloClient, InMemoryCache } from "@apollo/client";
import "dotenv/config"

/**
 * Fronend client used to send queris to the graphql endpoint in backend.
 */
export const apolloClient = new ApolloClient({
  uri: process.env.DB_URL ? process.env.DB_URL : "http://localhost:4000/graphql",
  //uri: process.env.DB_URL ? process.env.DB_URL : "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
