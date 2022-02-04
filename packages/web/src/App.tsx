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
} from "@apollo/client";

import { createSubscription } from "./controllers/mqttClient";
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

// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Exa
