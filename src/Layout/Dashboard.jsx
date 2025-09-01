import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { TbPackages } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { IoListSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import myLogo from "../assets/images/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FaShopify, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ImHammer2 } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { FaSignsPost } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const axiosPublic = useAxiosPublic();

  // get specific user data using email
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
        <div className="lg:w-72 min-h-screen bg-gradient-to-tr from-[#1a6322] to-[#059212] hover:bg-gradient-to-l text-slate-100 lg:pt-10 shadow-lg fixed lg:static">
          <ul className="text-lg p-2 space-y-4 lg:px-6 font-bold">
            {/* For Admin Dashboard */}
            {userData?.status === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/adminDashboardContent">
                    <RxDashboard className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/adminDashboardContent"
                    className="hidden lg:inline"
                  >
                    Admin Dashboard
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/totalUsers">
                    <FaUsers className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/totalUsers"
                    className="hidden lg:inline"
                  >
                    All Users
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/totalModerators">
                    <FaUser className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/totalModerators"
                    className="hidden lg:inline"
                  >
                    Moderators
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allServices">
                    <MdMiscellaneousServices className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allServices"
                    className="hidden lg:inline"
                  >
                    All Services
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allRequestedServices">
                    <MdMiscellaneousServices className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allRequestedServices"
                    className="hidden lg:inline"
                  >
                    Requested Services
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allBidPosts">
                    <FaSignsPost className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allBidPosts"
                    className="hidden lg:inline"
                  >
                    All Bid Posts
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/totalBidRequests">
                    <ImHammer2 className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/totalBidRequests"
                    className="hidden lg:inline"
                  >
                    Bided Requests
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allCartItems">
                    <FaShoppingCart className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allCartItems"
                    className="hidden lg:inline"
                  >
                    Shop Products
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard">
                    <GrServices className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink to="/dashboard" className="hidden lg:inline">
                    Total Service Paid
                  </NavLink>
                </li>
                <div className="py-6">
                  <hr />
                </div>
              </>
            )}

            {/* For Moderators */}

            {userData?.status === "Moderator" && (<>
                  <li>
                  <Link to="/dashboard/moderatorDash">
                    <RxDashboard className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/moderatorDash"
                    className="hidden lg:inline"
                  >
                    Moderator Dashboard
                  </NavLink>
                </li>

                  <li>
                  <Link to="/dashboard/allServices">
                    <MdMiscellaneousServices className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allServices"
                    className="hidden lg:inline"
                  >
                    All Services
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allRequestedServices">
                    <MdMiscellaneousServices className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allRequestedServices"
                    className="hidden lg:inline"
                  >
                    Requested Services
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/allBidPosts">
                    <FaSignsPost className="inline text-white text-xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/allBidPosts"
                    className="hidden lg:inline"
                  >
                    All Bid Posts
                  </NavLink>
                </li>

                <li>
                  <Link to="/dashboard/totalBidRequests">
                    <ImHammer2 className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/totalBidRequests"
                    className="hidden lg:inline"
                  >
                    Bided Requests
                  </NavLink>
                </li>

                  <li>
                  <Link to="/dashboard/userSavedCarts">
                    <FaShoppingCart className="inline text-white text-2xl mr-2" />
                  </Link>
                  <NavLink
                    to="/dashboard/userSavedCarts"
                    className="hidden lg:inline"
                  >
                    User Saved Carts
                  </NavLink>
                </li>

                 <div className="py-6">
                  <hr />
                </div>
                
            </>)}

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
          <br />
          <br />
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
