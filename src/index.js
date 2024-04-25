import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';

const prod = false;
let url = "https://itmd544-server.onrender.com/graphql";

if(!prod) {
  url = "http://localhost:8000/graphql";
}

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
  headers: {
    token: localStorage.getItem("token") || ""
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);
reportWebVitals();
