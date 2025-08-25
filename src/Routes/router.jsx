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
import Error from "../Pages/Error";
import Dashboard from "../Layout/Dashboard";
import DashContent from "../Components/DashboardCompo/DashContent";
import UserRequestedServices from "../Components/DashboardCompo/UserRequestedServices";
import MyProfile from "../Components/DashboardCompo/MyProfile";
import RequestService1 from "../Pages/RequestService1";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
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
          // element:<PrivateRoute><RequestService></RequestService></PrivateRoute>
          element:<PrivateRoute><RequestService1></RequestService1></PrivateRoute>
        },
        {
          path:"myProfile",
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
       {
         path:"dashContent",
         element:<DashContent></DashContent>
       },
       {
        path:"myRequestedServices",
        element:<UserRequestedServices></UserRequestedServices>
       },
      
      ]
    }
  ]);
  

export default router;