// for Apollo Client v3:
import {
    ApolloLink,
    Operation,
    FetchResult,
    Observable,
  } from '@apollo/client/core';
  
  import { print } from 'graphql';
  import { createClient, ClientOptions, Client } from 'graphql-ws';
  
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
          },
        );
      });
    }
  }
  
  const link = new WebSocketLink({
    url: 'ws://localhost:4000/graphql',
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