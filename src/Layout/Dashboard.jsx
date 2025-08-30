import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { TbPackages } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { IoListSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import myLogo from "../assets/images/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FaShopify } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const axiosPublic = useAxiosPublic();

  // get user data using email
  useEffect(() => {
    axiosPublic.get(`/users/${user?.email}`).then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };

  return (
    <div>
      {/* dashboard header */}
      <div className="flex justify-between items-center p-2 border-0">
        <div>
          <div className="logo flex items-center">
            <img
              className="w-[60px] h-[60px] object-cover"
              src={myLogo}
              alt=""
            />
            <Link to="/" className=" text-2xl text-black font-bold">
              Ecobin{" "}
              <span className="text-[#059212] text-sm font-semibold border-[#059212] border rounded-[50px]  p-1 ">
                {userData?.status}
              </span>
            </Link>
          </div>
        </div>
        <div>
          {user ? (
            <Link>
              <button
                onClick={handleLogOut}
                className="btn btn-info bg-gradient-to-r from-[#059212] to-[#9BEC00] ...  rounded-[50px] text-white  hover:bg-gradient-to-l border-0 hover:text-white"
              >
                Log Out
              </button>
            </Link>
          ) : (
            navigate("/login")
          )}
        </div>
      </div>

      <div className="flex justify-between lg:items-start">
        {/* dashboard side bar */}
        <div className="lg:w-72 min-h-screen max-h-full bg-gradient-to-tr from-[#1a6322] to-[#059212] hover:bg-gradient-to-l text-slate-100 lg:pt-10 shadow-lg fixed lg:static">
          <ul className="text-lg p-2 space-y-4 lg:px-6 font-bold">
            {userData?.status === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/dashContent">
                    <RxDashboard className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/adminDashboardContent"
                    className="hidden lg:inline"
                  >
                    Admin Dashboard
                  </NavLink>
                </li>
              </>
            )}


            {/* For All Types User */}
            <li>
              <Link to="/dashboard/dashContent">
                <RxDashboard className="inline text-white text-2xl mr-2" />
              </Link>
              <NavLink to="/dashboard/dashContent" className="hidden lg:inline">
                Overview
              </NavLink>
            </li>
            <li>
              <Link to="/dashboard/myRequestedServices">
                {" "}
                <SlCalender className="inline text-white text-2xl mr-2" />
              </Link>
              <NavLink
                to="/dashboard/myRequestedServices"
                className="hidden lg:inline"
              >
                Request Services
              </NavLink>
            </li>
            <li>
              <Link to="/dashboard/exploreBidPosts">
                <TbPackages className="inline text-white text-2xl mr-2" />
              </Link>
              <NavLink
                to="/dashboard/exploreBidPosts"
                className="hidden lg:inline"
              >
                Explore Bid Post
              </NavLink>
            </li>
            <li>
              <Link to="/dashboard/userCartItems">
                <FaShopify className="inline text-white text-2xl mr-2"></FaShopify>
              </Link>
              <NavLink
                to="/dashboard/userCartItems"
                className="hidden lg:inline"
              >
                My Cart
              </NavLink>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <BiMoneyWithdraw className="inline text-white text-2xl mr-2" />
              </Link>
              <NavLink to="/dashboard" className="hidden lg:inline">
                My Payment List
              </NavLink>
            </li>
          </ul>
        </div>

        {/* dashboard content */}
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
