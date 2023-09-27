import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "../components/nav";
import App from "./App.jsx";
import { SinglePost } from "../components/singlepost.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <App /> },
        { path: "post/:postId", element: <SinglePost /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
