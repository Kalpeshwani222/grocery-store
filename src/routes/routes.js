import CategoryDetails from "pages/CategoryDetails";
import MainLayout from "layouts/main-layout";
import Home from "pages/Home";
import CategoryDetailLayout from "layouts/category-detail-layout";

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
    path: "categories/:categoryId/:subcategoryId",
    element: <CategoryDetailLayout />,
    children: [
      {
        path: "",
        element: <CategoryDetails />,
      },
    ],
  },
  // {
  //   path: "account",
  //   element: <CategoryDetailLayout />,
  //   children: [
  //     {
  //       path: "referrals",
  //       element: <h1>Referrals</h1>,
  //     },
  //     {
  //       path: "orders",
  //       element: <h1>Orders</h1>,
  //     },
  //     {
  //       path: "addresses",
  //       element: <h1>Addresses</h1>,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <h1>NOT FOUND \ 404 \ </h1>,
  },
]);

export default routes;
