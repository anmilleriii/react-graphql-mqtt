import "./App.scss";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { About } from "./routes/About";
import { NavigationBar } from "./components/Navigation/NavigationBar";

// /**
//  * Apollo
//  * @todo actual spot
//  */
// import {
//   ApolloProvider,
//   ApolloClient,
//   createHttpLink,
//   InMemoryCache,
//   useQuery,
//   gql,
// } from "@apollo/client";

// import * as Types from "../../server/types/generated";

// // import { createSubscription } from "./controllers/mqttClient";

// // const GET_POSTS = gql`
// // query Get {
// // }
// // `;

// // import mqtt from "mqtt";

// /**
//  * GraphQL server endpoint
//  */

// const httpLink = createHttpLink({
//   uri: "http://localhost:4000",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// // const posts = useQuery<>(GET_POSTS);

// /**
//  * Returns the average of two numbers.
//  *
//  * @remarks
//  * {@link https://github.com/microsoft/tsdoc}
//  * {@link Button}
//  * {@link Button | the Button class}
//  *
//  * @param x - The first input number
//  * @param y - The second input number
//  * @returns The arithmetic mean of `x` and `y`
//  *
//  * @beta
//  */

// for Apollo Client v3:
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  Operation,
  FetchResult,
  Observable,
  InMemoryCache,
} from "@apollo/client";

import { print } from "graphql";
import { createClient, ClientOptions, Client } from "graphql-ws";

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        }
      );
    });
  }
}

const link = new WebSocketLink({
  url: "ws://localhost:4000/graphql",
  // url
  // connectionParams: () => {
  //   const session = getSession();
  //   if (!session) {
  //     return {};
  //   }
  //   return {
  //     Authorization: `Bearer ${session.token}`,
  //   };
  // },
});

const client = new ApolloClient({
  link: link,
  // link: link,
  cache: new InMemoryCache(),
});

export default () => {
  useEffect(() => {
    // createSubscription();
    console.log(client)
  }, []);

  return (
    <ApolloProvider client={client}>
      {/* todo: w-100 */}
      <div className="mv4 center w-third-l w-two-thirds-m w-two-thirds mid-gray vh-100  ">
        <BrowserRouter>
          <NavigationBar />
          <h2 className="mt4">MQTT Duplex Heartbeat over Broker PoC</h2>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};
