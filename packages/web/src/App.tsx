import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Landing } from "./routes/Landing";
import { About } from "./routes/About";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import "./App.scss";

/**
 * Apollo Link
 * 
 * @see https://www.apollographql.com/docs/react/api/link/introduction/
 */
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
  url: `ws://${import.meta.env.VITE_GRAPHQL_SERVER_LOCATION}`,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default () => {
  useEffect(() => {
    // createSubscription();
    console.log(client);
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
