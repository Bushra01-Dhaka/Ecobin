import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ServicePage from "../Pages/ServicePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:
      [
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"services",
          element: <ServicePage></ServicePage>
        }
      ]
    },
  ]);
  

export default router;