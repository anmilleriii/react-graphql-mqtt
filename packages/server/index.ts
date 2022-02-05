// /**
//  * Server definition
//  * 
//  * @todo move resolvers to different file
//  */

// import { ApolloServer } from "apollo-server";
// import { readFileSync } from 'fs'
// import { Post, Resolvers } from './types/generated/resolver-types';
// import { MQTTPubSub } from "graphql-mqtt-subscriptions";
// import { createMqttClient } from './mqtt-client'

// import { locationChanged } from './resolvers/mqtt/locationChanged.resolver';


// const pubsub = new MQTTPubSub(
//   {
//     client: createMqttClient()
//   }
// ); // connecting to mqtt://localhost by default

// const SOMETHING_CHANGED_TOPIC = 'something_changed';

// const typeDefs = readFileSync('./schema.graphql').toString('utf-8')


// // const client = connect('mqtt://test.mosquitto.org', {
// //   reconnectPeriod: 1000,
// // });



// /**
//  * Post from datasource
//  */
// const myPost: Post = {
//   id: 1,
//   title: "First post",
//   author: {
//     firstName: "sdf",
//     lastName: "Miller",
//     id: 3
//   }

// }
// const resolvers: Resolvers = {
//   Query: {
//     posts: () => [myPost]
//   },
//   // Subscription: {
//   //   somethingChanged: {
//   //     subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC) as any
//   //   }
//   // }
//   Subscription: {
//     locationChanged,
//   },
// }


// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });



import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/'
  });

  // Modified server startup
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}