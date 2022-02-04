import { ApolloServer } from "apollo-server";
import { readFileSync } from 'fs'
import { Post, Resolvers} from './types/resolvers-types';


const typeDefs = readFileSync('./schema.graphql').toString('utf-8')

/**
 * Post from datasource
 */
const myPost: Post = {
  id: 1,
  title: "First post",
  author: {
    firstName: "sdf",
    lastName: "Miller",
    id: 3
  }

}
const resolvers: Resolvers = {
  Query: {
    posts: () => [myPost]
  }
}


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});