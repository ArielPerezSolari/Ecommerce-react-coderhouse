import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from "./context/cartContext";
import {RouterProvider} from "react-router-dom"
import { router } from './router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5puTBvYXlfL9M3UUHq-jC1oVVLV5LuTg",
  authDomain: "e-commerce-react-coderho-c0d4c.firebaseapp.com",
  projectId: "e-commerce-react-coderho-c0d4c",
  storageBucket: "e-commerce-react-coderho-c0d4c.appspot.com",
  messagingSenderId: "212004046823",
  appId: "1:212004046823:web:3ff9ea398b25ea5a4edf42"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
