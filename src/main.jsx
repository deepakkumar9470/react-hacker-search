import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import NewsDetail from "./components/NewsDetail";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/news/:id",
//     element: <NewsDetail />,
//   },
// // ]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="/" element={<Home />} />
//       <Route path="news/:id" element={<NewsDetail />} />
//     </Route>
//   )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
