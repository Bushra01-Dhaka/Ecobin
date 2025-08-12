import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import logo from "../assets/images/logo.png"


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* <progress className="progress w-56 bg-info"></progress> */}
        <img
              className="w-[100px] h-[100px] object-cover"
              src={logo}
              alt=""
            />
        <h2 className=" text-4xl text-black font-bold">Ecobin</h2>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/register" state = {{from: location}} replace></Navigate>;
};

export default PrivateRoute;
