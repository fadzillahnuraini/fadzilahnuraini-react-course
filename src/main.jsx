import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import Movie from "./pages/movie.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import About from "./pages/about.jsx";
import WatchList from "./pages/watchList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/watchList",
    element: <WatchList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
