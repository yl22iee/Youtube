import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Root from "./pages/Root";
// import MainHome from "./pages/MainHome";
import Videos from "./pages/Videos";
import VideosDetail from "./pages/VideosDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "/video", element: <Videos /> },
      { path: "/video/:keyword", element: <Videos /> },
      { path: "/video/watch/:videoId", element: <VideosDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
