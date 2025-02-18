import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errors from "./pages/error";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import BookMark from "./pages/bookmark";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errors />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Errors />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Errors />,
  },
  {
    path: "/bookmarks",
    element: <BookMark />,
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
