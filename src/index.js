import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Trending from "./pages/Trending";
import Fav from "./pages/Fav";
import { ListProvider } from "./context/ListContext";
import CoinInfo from "./components/CoinInfo";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "/",
            element: <Main />
          },
          {
            path: ":id",
            element: <CoinInfo />
          }
        ]
      }, {
        path: "trending",
        element: <Trending />
      }, {
        path: "fav",
        element: <Fav />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListProvider>
      <RouterProvider router={route} />
    </ListProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
