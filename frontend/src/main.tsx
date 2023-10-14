import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { client } from './apolloClient.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>
);
