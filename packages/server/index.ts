/**
 * Server definition
 * 
 * @todo move resolvers to different file
 */

import { ApolloServer } from "apollo-server";
import { readFileSync } from 'fs'
import { Post, Resolvers } from './types/generated/resolver-types';
import { MQTTPubSub } from "graphql-mqtt-subscriptions";
import { createMqttClient } from './mqtt-client'

const pubsub = new MQTTPubSub(
  {
    client: createMqttClient()
  }
); // connecting to mqtt://localhost by default

const SOMETHING_CHANGED_TOPIC = 'something_changed';

const typeDefs = readFileSync('./schema.graphql').toString('utf-8')


// const client = connect('mqtt://test.mosquitto.org', {
//   reconnectPeriod: 1000,
// });



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
  },
  Subscription: {
    somethingChanged: {
      subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC) as any
    }
  }
}


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});