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
import ShopDetails from "../Components/DashboardCompo/ShopDetails";
import UserCartItems from "../Components/DashboardCompo/UserCartItems";
import ExploreBidPosts from "../Components/DashboardCompo/ExploreBidPosts";
import AdminDashContent from "../Components/DashboardCompo/AdminDashContent";
import TotalUsers from "../Components/AdminDash/TotalUsers";
import TotalModerator from "../Components/AdminDash/TotalModerator";
import TotalBidReq from "../Components/AdminDash/TotalBidReq";
import AllBidPosts from "../Components/AdminDash/AllBidPosts";
import AllCartItems from "../Components/AdminDash/AllCartItems";
import AllServices from "../Components/AdminDash/AllServices";
import AllRequestedServices from "../Components/AdminDash/AllRequestedServices";
import ModeratorDashContent from "../Components/ModeratorDash/ModeratorDashContent";
import UserSavedCart from "../Components/ModeratorDash/UserSavedCart";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Components/Payment History/PaymentHistory";
import AllPaymentsList from "../Components/Payment History/AllPaymentsList";
import Payment1 from "../Components/Payment/Payment1";
import ContactUs from "../Components/HomePage/ContactUs";

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
          path:"shopDetails/:id",
          element:<ShopDetails></ShopDetails>
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
        },
        {
          path:"contactUs",
          element:<ContactUs></ContactUs>
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
       {
        path:"userCartItems",
        element:<UserCartItems></UserCartItems>
       },
       {
        path:"exploreBidPosts",
        element:<ExploreBidPosts></ExploreBidPosts>
       },
       {
        path:"adminDashboardContent",
        element:<AdminDashContent></AdminDashContent>
       },
       {
        path:"totalUsers",
        element:<TotalUsers></TotalUsers>
       },
       {
        path:"totalModerators",
        element:<TotalModerator></TotalModerator>
       },
       {
        path:"totalBidRequests",
        element:<TotalBidReq></TotalBidReq>
       },
       {
        path:"allServices",
        element:<AllServices></AllServices>
       },
       {
        path:"allRequestedServices",
        element:<AllRequestedServices></AllRequestedServices>
       },
       {
        path:"allBidPosts",
        element:<AllBidPosts></AllBidPosts>
       },
       {
        path:"allCartItems",
        element:<AllCartItems></AllCartItems>
       },
       {
        path:"moderatorDash",
        element:<ModeratorDashContent></ModeratorDashContent>
       },
       {
        path:"userSavedCarts",
        element:<UserSavedCart></UserSavedCart>
       },
       {
        path:"payment",
        element:<Payment></Payment>
       },
       {
         path:"servicePayment",
         element:<Payment1></Payment1>
       },
       {
        path:"paymentHistory",
        element:<PaymentHistory></PaymentHistory>
       },
       {
        path:"allCartPayment",
        element:<AllPaymentsList></AllPaymentsList>
       }
      
      ]
    }
  ]);
  

export default router;