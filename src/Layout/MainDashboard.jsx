
// import { Link, NavLink, Outlet, useNavigate } from "react-router";
// import { RxDashboard } from "react-icons/rx";
// import { SlCalender } from "react-icons/sl";
// import { TbPackages } from "react-icons/tb";
// import { IoBagAdd } from "react-icons/io5";
// import { IoListSharp } from "react-icons/io5";
// import { useContext } from "react";
// import myLogo from "../assets/images/logo.png"
// import { AuthContext } from "../Provider/AuthProvider";

// const Dashboard = () => {

//   const {user, logOut} = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//         logOut()
//         .then(() => {})
//         .catch((error) => {console.log(error)})
//         navigate("/login")
//   }

//   return (
//     <div>
//     {/* dashboard header */}
//       <div className="flex justify-between items-center p-2 border-0">
//         <div>
//           <div className="logo flex items-center">
//             <img
//               className="w-[60px] h-[60px] object-cover"
//               src={myLogo}
//               alt=""
//             />
//             <Link to="/" className=" text-2xl text-black font-bold">
//               Prescripto <span className="text-[#059212] text-xs font-semibold border border-[#059212] rounded-full p-1 ">User</span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           { user ? <Link>
//             <button onClick={handleLogOut} className="btn btn-info bg-gradient-to-r from-[#059212] to-[#9BEC00] ...  rounded-[50px] text-white  hover:bg-gradient-to-l border-0 hover:text-white">Log Out</button>
//             </Link>  
//             :
//             (
//               navigate("/login")
//             )
//           }
           
//         </div>
//       </div>
      
//       <div className="flex justify-between lg:items-start">
//         {/* dashboard side bar */}
//           <div className="lg:w-72 min-h-screen max-h-full bg-gradient-to-tr from-[#1a6322] to-[#059212] hover:bg-gradient-to-l text-slate-100 lg:pt-10 shadow-lg fixed lg:static">
//               <ul className="text-lg p-2 space-y-4 lg:px-6 font-bold">
//               <li>
//                 <RxDashboard className="inline text-white text-2xl mr-2" />
//                 <NavLink to="/dashboard/dashContent" className="hidden lg:inline">Dashboard</NavLink>
//               </li>
//               <li>
//                 <SlCalender className="inline text-white text-2xl mr-2"  />
//                 <NavLink to="/dashboard/allAppointments" className="hidden lg:inline">Appointments</NavLink>
//               </li>
//               <li>
//                 <TbPackages className="inline text-white text-2xl mr-2" />
//                 <NavLink to="/dashboard/allPackages" className="hidden lg:inline">Packages</NavLink>
//               </li>
//               <li>
//                 <IoListSharp className="inline text-white text-2xl mr-2" />
//                 <NavLink to="/dashboard/doctorList" className="hidden lg:inline">Doctors Lists</NavLink>
//               </li>
//               <li>
//                 <IoBagAdd className="inline text-white text-2xl mr-2" />
//                 <NavLink to="/dashboard/addDoctors" className="hidden lg:inline">Add Doctors</NavLink>
//               </li>
//               </ul>
//           </div>

//           {/* dashboard content */}
//           <div className="flex-1 ">
//             <Outlet></Outlet>
//           </div>
//       </div>


//     </div>
//   );
// };

// export default Dashboard;
