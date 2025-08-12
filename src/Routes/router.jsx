import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ServicePage from "../Pages/ServicePage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Shop from "../Pages/Shop";
import AboutUs from "../Pages/AboutUs";
import ServiceDetails from "../Components/DashboardCompo/ServiceDetails";
import Packages from "../Pages/Packages";
import RequestService from "../Pages/RequestService";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"shop",
          element:<Shop></Shop>
        },
        {
          path:"aboutUs",
          element:<AboutUs></AboutUs>

        },
        {
          path:"serviceDetails/:id",
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:"packages",
          element:<Packages></Packages>
        },
        {
          path:"requestService",
          element:<PrivateRoute><RequestService></RequestService></PrivateRoute>
        }
      ]
    },
  ]);
  

export default router;