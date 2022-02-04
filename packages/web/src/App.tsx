import "./App.scss";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { About } from "./routes/About";
import { NavigationBar } from "./components/Navigation/NavigationBar";

/**
 * Apollo
 * @todo actual spot
 */

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";


import * as Types from '../../server/types';

import { createSubscription } from "./controllers/mqttClient";

const GET_POSTS = gql`
  query GetPosts() {
    # posts() {

    # }
  } 
`;

// import mqtt from "mqtt";

/**
 * GraphQL server endpoint
 */
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const posts = useQuery<>(GET_POSTS)


export default () => {
  useEffect(() => {
    createSubscription();
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="mv4 center w-third-l w-two-thirds-m w-two-thirds mid-gray vh-100 ">
        <BrowserRouter>
          <NavigationBar />
          <h2 className="test">MQTT Duplex Heartbeat over Broker PoC</h2>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};