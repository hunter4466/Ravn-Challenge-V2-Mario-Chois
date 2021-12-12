import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import App from './App';
import './assets/styles/_index.scss';
import './assets/styles/_navbar.scss';
import './assets/styles/_view.scss';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPeople: relayStylePagination(),
        },
      },
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
