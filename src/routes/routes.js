import MainLayout from "layouts/main-layout";
import Home from "pages/Home";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>NOT FOUND \ 404 \ </h1>,
  },
]);

export default routes;
