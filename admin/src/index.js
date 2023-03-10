import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// -----Initial code ------>

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from "react-redux";
// import {
//   store,
//   persistor
// } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <PersistGate loading="null" persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// );




// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import {
//   store,
//   persistor
// } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// // ReactDOM.createRoot(
// createRoot(
//   <Provider store={store}>
//     <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//       {/* <PersistGate loading="null" persistor={persistor}> */}
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );



